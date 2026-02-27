import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { Profile } from '../types';

export default function Home() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loadingProfile, setLoadingProfile] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      const { data: { user } } = await supabase.auth.getUser();

      if (user) {
        const { data, error } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', user.id)
          .single();

        if (error) {
          console.error('Error fetching profile:', error);
        } else if (data) {
          setProfile(data);
        }
      }
      setLoadingProfile(false);
    };

    fetchProfile();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  if (loadingProfile) {
    return <div className="min-h-screen flex items-center justify-center">Loading profile...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-6">Welcome to Deenora V3</h1>
      {profile ? (
        <>
          <p className="text-lg text-gray-600 mb-2">Logged in as: {profile.full_name}</p>
          <p className="text-lg text-gray-600 mb-8">Your role: <span className="font-bold">{profile.role}</span></p>
          {profile.role === 'super_admin' && (
            <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-md mb-8">
              <p className="font-bold">Admin Panel Content Here!</p>
              <p>You have super admin privileges.</p>
            </div>
          )}
        </>
      ) : (
        <p className="text-lg text-red-500 mb-8">Could not load profile data.</p>
      )}
      <button
        onClick={handleLogout}
        className="group relative w-auto flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
      >
        Logout
      </button>
    </div>
  );
}
