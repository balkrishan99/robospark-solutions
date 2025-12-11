-- Create demo_requests table for contact form submissions
CREATE TABLE public.demo_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  farm_size TEXT,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.demo_requests ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert demo requests (public contact form)
CREATE POLICY "Anyone can submit demo requests" 
ON public.demo_requests 
FOR INSERT 
WITH CHECK (true);

-- Only allow reading for authenticated users (admin access)
CREATE POLICY "Authenticated users can view demo requests" 
ON public.demo_requests 
FOR SELECT 
TO authenticated
USING (true);