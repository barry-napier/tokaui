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
  const [tableExists, setTableExists] = useState(true);

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
        // Check if the error is related to the table not existing
        if (error.code === '42P01' || error.message.includes('does not exist')) {
          setTableExists(false);
          setError(
            'The todos table does not exist in your Supabase database. Please create it using the SQL in the README.'
          );
        } else {
          throw error;
        }
      } else {
        setTodos(data || []);
        setTableExists(true);
      }
    } catch (error: unknown) {
      console.error('Error fetching todos:', error);
      setError(
        'Failed to load todos. Please check your Supabase configuration and ensure the todos table exists.'
      );
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

      // Don't attempt to add a todo if the table doesn't exist
      if (!tableExists) {
        setError('Cannot add todo: The todos table does not exist in your Supabase database.');
        return;
      }

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
    } catch (error: unknown) {
      console.error('Error adding todo:', error);
      setError('Failed to add todo. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  async function toggleTodoStatus(id: string, currentStatus: boolean) {
    try {
      setError('');

      // Don't attempt to update if the table doesn't exist
      if (!tableExists) {
        setError('Cannot update todo: The todos table does not exist in your Supabase database.');
        return;
      }

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
    } catch (error: unknown) {
      console.error('Error updating todo:', error);
      setError('Failed to update todo. Please try again.');
    }
  }

  async function deleteTodo(id: string) {
    try {
      setError('');

      // Don't attempt to delete if the table doesn't exist
      if (!tableExists) {
        setError('Cannot delete todo: The todos table does not exist in your Supabase database.');
        return;
      }

      const { error } = await supabase.from('todos').delete().eq('id', id);

      if (error) {
        throw error;
      }

      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (error: unknown) {
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
          disabled={loading || !tableExists}
          className="flex-1"
        />
        <Button type="submit" disabled={loading || !newTask.trim() || !tableExists}>
          Add
        </Button>
      </form>

      {loading && todos.length === 0 ? (
        <div className="text-zinc-500 py-4 text-center">Loading...</div>
      ) : todos.length === 0 && !error ? (
        <div className="text-zinc-500 py-4 text-center">
          {tableExists ? 'No todos yet. Add one above!' : 'Create the todos table to get started.'}
        </div>
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
