'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface Todo {
  id: string;
  task: string;
  is_complete: boolean;
  created_at: string;
}

export function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTask, setNewTask] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchTodos();
  }, []);

  async function fetchTodos() {
    try {
      setLoading(true);
      setError('');

      const { data, error } = await supabase
        .from('todos')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        throw error;
      }

      setTodos(data || []);
    } catch (error) {
      console.error('Error fetching todos:', error);
      setError('Failed to load todos. Please try again later.');
    } finally {
      setLoading(false);
    }
  }

  async function addTodo(e: React.FormEvent) {
    e.preventDefault();

    if (!newTask.trim()) return;

    try {
      setLoading(true);
      setError('');

      const { data, error } = await supabase
        .from('todos')
        .insert([{ task: newTask.trim() }])
        .select();

      if (error) {
        throw error;
      }

      if (data) {
        setTodos([...data, ...todos]);
        setNewTask('');
      }
    } catch (error) {
      console.error('Error adding todo:', error);
      setError('Failed to add todo. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  async function toggleTodoStatus(id: string, currentStatus: boolean) {
    try {
      setError('');

      const { error } = await supabase
        .from('todos')
        .update({ is_complete: !currentStatus })
        .eq('id', id);

      if (error) {
        throw error;
      }

      setTodos(
        todos.map((todo) => {
          if (todo.id === id) {
            return { ...todo, is_complete: !currentStatus };
          }
          return todo;
        })
      );
    } catch (error) {
      console.error('Error updating todo:', error);
      setError('Failed to update todo. Please try again.');
    }
  }

  async function deleteTodo(id: string) {
    try {
      setError('');

      const { error } = await supabase.from('todos').delete().eq('id', id);

      if (error) {
        throw error;
      }

      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error('Error deleting todo:', error);
      setError('Failed to delete todo. Please try again.');
    }
  }

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Todo List</h2>

      {error && <div className="bg-red-50 text-red-800 rounded-md p-3 text-sm">{error}</div>}

      <form onSubmit={addTodo} className="flex gap-2">
        <Input
          type="text"
          placeholder="Add a new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          disabled={loading}
          className="flex-1"
        />
        <Button type="submit" disabled={loading || !newTask.trim()}>
          Add
        </Button>
      </form>

      {loading && todos.length === 0 ? (
        <div className="text-zinc-500 py-4 text-center">Loading todos...</div>
      ) : todos.length === 0 ? (
        <div className="text-zinc-500 py-4 text-center">No todos yet. Add one above!</div>
      ) : (
        <ul className="space-y-2">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="border-zinc-200 flex items-center justify-between gap-2 rounded-md border p-3"
            >
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={todo.is_complete}
                  onChange={() => toggleTodoStatus(todo.id, todo.is_complete)}
                  className="border-zinc-300 text-zinc-900 focus:ring-zinc-500 h-4 w-4 rounded"
                />
                <span
                  className={`${todo.is_complete ? 'text-zinc-500 line-through' : 'text-zinc-900'}`}
                >
                  {todo.task}
                </span>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => deleteTodo(todo.id)}
                className="h-8 w-8 p-0"
              >
                ×
              </Button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
