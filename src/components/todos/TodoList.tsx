import { useState, useEffect, useCallback } from 'react';
import { useSupabaseAuth } from '@/hooks/useSupabaseAuth';
import { Todo, fetchTodos, addTodo } from '@/lib/database';
import { TodoItem } from './TodoItem';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function TodoList() {
  const { user } = useSupabaseAuth();
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodoTitle, setNewTodoTitle] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Define loadTodos as a useCallback to avoid dependency issues
  const loadTodos = useCallback(async () => {
    if (!user) return;

    setIsLoading(true);
    setError(null);

    try {
      const { success, data, error } = await fetchTodos(user.id);

      if (success && data) {
        setTodos(data);
      } else if (error) {
        console.error('Error loading todos:', error);
        setError('Failed to load todos');
      }
    } catch (err) {
      console.error('Error in loadTodos:', err);
      setError('An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  }, [user]);

  // Load todos when user changes
  useEffect(() => {
    if (user) {
      loadTodos();
    } else {
      setTodos([]);
    }
  }, [user, loadTodos]);

  const handleAddTodo = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!user || !newTodoTitle.trim()) return;

    setIsAdding(true);
    setError(null);

    try {
      const { success, data, error } = await addTodo(user.id, newTodoTitle);

      if (success && data) {
        setTodos((prev) => [data, ...prev]);
        setNewTodoTitle('');
      } else if (error) {
        console.error('Error adding todo:', error);
        setError('Failed to add todo');
      }
    } catch (err) {
      console.error('Error in handleAddTodo:', err);
      setError('An unexpected error occurred');
    } finally {
      setIsAdding(false);
    }
  };

  if (!user) {
    return (
      <div className="p-8 text-center">
        <p>Please log in to manage your todos</p>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-2xl space-y-6">
      <div className="text-center">
        <h1 className="text-2xl font-bold">Your Todos</h1>
        <p className="text-zinc-500 mt-2 text-sm">Manage your tasks with Supabase and Next.js</p>
      </div>

      <form onSubmit={handleAddTodo} className="flex space-x-2">
        <Input
          value={newTodoTitle}
          onChange={(e) => setNewTodoTitle(e.target.value)}
          placeholder="Add a new todo..."
          disabled={isAdding}
          className="flex-1"
        />
        <Button type="submit" disabled={isAdding || !newTodoTitle.trim()}>
          {isAdding ? 'Adding...' : 'Add'}
        </Button>
      </form>

      {error && (
        <div className="bg-red-50 border-red-200 text-red-700 rounded border p-3 text-sm">
          {error}
        </div>
      )}

      {isLoading ? (
        <div className="p-8 text-center">
          <p>Loading todos...</p>
        </div>
      ) : todos.length === 0 ? (
        <div className="border-zinc-300 rounded-md border border-dashed p-8 text-center">
          <p className="text-zinc-500">No todos yet. Add one above!</p>
        </div>
      ) : (
        <div className="space-y-3">
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} onUpdate={loadTodos} />
          ))}
        </div>
      )}
    </div>
  );
}
