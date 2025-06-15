import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import Head from 'next/head';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

interface Post {
  id: number;
  title: string;
  content: string;
  created_at: string;
}

export default function Blog() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) console.error('Error fetching posts:', error);
      else setPosts(data || []);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  return (
    <>
      <Head>
        <title>Blog - BSNK Law Associates</title>
      </Head>
      <main className="min-h-screen bg-gray-50 px-4 py-10">
        <h1 className="text-3xl font-bold text-center mb-8">Our Blog</h1>

        {loading ? (
          <p className="text-center">Loading posts...</p>
        ) : posts.length === 0 ? (
          <p className="text-center text-gray-500">No blog posts available.</p>
        ) : (
          <div className="max-w-4xl mx-auto space-y-6">
            {posts.map((post) => (
              <div key={post.id} className="bg-white p-6 rounded shadow">
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-700 whitespace-pre-wrap">{post.content}</p>
                <p className="text-sm text-gray-400 mt-2">
                  Posted on {new Date(post.created_at).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        )}
      </main>
    </>
  );
}

