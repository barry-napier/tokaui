import { useState } from 'react';
import { Todo, updateTodo, deleteTodo } from '@/lib/database';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface TodoItemProps {
  todo: Todo;
  onUpdate: () => void;
}

export function TodoItem({ todo, onUpdate }: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(todo.title);
  const [isLoading, setIsLoading] = useState(false);

  const handleToggleComplete = async () => {
    setIsLoading(true);
    try {
      await updateTodo(todo.id, { completed: !todo.completed });
      onUpdate();
    } catch (error) {
      console.error('Error toggling todo:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSaveEdit = async () => {
    if (!title.trim()) return;

    setIsLoading(true);
    try {
      await updateTodo(todo.id, { title });
      setIsEditing(false);
      onUpdate();
    } catch (error) {
      console.error('Error updating todo:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async () => {
    setIsLoading(true);
    try {
      await deleteTodo(todo.id);
      onUpdate();
    } catch (error) {
      console.error('Error deleting todo:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="border-zinc-200 flex items-center justify-between rounded-md border p-4">
      <div className="flex flex-1 items-center space-x-3">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleToggleComplete}
          disabled={isLoading}
          className="border-zinc-300 text-zinc-900 focus:ring-zinc-500 h-4 w-4 rounded"
        />

        {isEditing ? (
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="flex-1"
            disabled={isLoading}
            autoFocus
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSaveEdit();
              if (e.key === 'Escape') {
                setTitle(todo.title);
                setIsEditing(false);
              }
            }}
          />
        ) : (
          <span
            className={`flex-1 ${todo.completed ? 'text-zinc-500 line-through' : ''}`}
            onDoubleClick={() => setIsEditing(true)}
          >
            {todo.title}
          </span>
        )}
      </div>

      <div className="flex space-x-2">
        {isEditing ? (
          <>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setTitle(todo.title);
                setIsEditing(false);
              }}
              disabled={isLoading}
            >
              Cancel
            </Button>
            <Button size="sm" onClick={handleSaveEdit} disabled={isLoading || !title.trim()}>
              Save
            </Button>
          </>
        ) : (
          <>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsEditing(true)}
              disabled={isLoading}
            >
              Edit
            </Button>
            <Button variant="destructive" size="sm" onClick={handleDelete} disabled={isLoading}>
              Delete
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
