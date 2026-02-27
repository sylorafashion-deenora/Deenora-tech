
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://awarqlzxolrehtztcslq.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF3YXJxbHp4b2xyZWh0enRjc2xxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIxNzYyMDQsImV4cCI6MjA4Nzc1MjIwNH0.CyUcdmQcqqUn7bW-4CLf96c1eGI6GbFu9dXHxT-imeM';

/**
 * Global Supabase client instance.
 * Persistent session enabled for PWA functionality.
 */
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
    storage: window.localStorage,
    storageKey: 'madrasah_auth_token',
    flowType: 'pkce'
  }
});
