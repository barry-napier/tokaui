import { supabase } from './supabase';

// Define types for our database tables
export type Todo = {
  id: string;
  user_id: string;
  title: string;
  completed: boolean;
  created_at: string;
};

// Fetch todos for a user
export async function fetchTodos(userId: string) {
  try {
    const { data, error } = await supabase
      .from('todos')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });

    if (error) throw error;
    return { success: true, data: data as Todo[] };
  } catch (error) {
    console.error('Error fetching todos:', error);
    return { success: false, error };
  }
}

// Add a new todo
export async function addTodo(userId: string, title: string) {
  try {
    const { data, error } = await supabase
      .from('todos')
      .insert([{ user_id: userId, title, completed: false }])
      .select();

    if (error) throw error;
    return { success: true, data: data[0] as Todo };
  } catch (error) {
    console.error('Error adding todo:', error);
    return { success: false, error };
  }
}

// Update a todo
export async function updateTodo(
  id: string,
  updates: Partial<Omit<Todo, 'id' | 'user_id' | 'created_at'>>
) {
  try {
    const { data, error } = await supabase.from('todos').update(updates).eq('id', id).select();

    if (error) throw error;
    return { success: true, data: data[0] as Todo };
  } catch (error) {
    console.error('Error updating todo:', error);
    return { success: false, error };
  }
}

// Delete a todo
export async function deleteTodo(id: string) {
  try {
    const { error } = await supabase.from('todos').delete().eq('id', id);

    if (error) throw error;
    return { success: true };
  } catch (error) {
    console.error('Error deleting todo:', error);
    return { success: false, error };
  }
}
