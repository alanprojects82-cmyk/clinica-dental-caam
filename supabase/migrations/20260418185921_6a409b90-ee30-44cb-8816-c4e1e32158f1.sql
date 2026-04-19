CREATE TABLE public.appointment_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  message TEXT,
  status TEXT NOT NULL DEFAULT 'new',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.appointment_requests ENABLE ROW LEVEL SECURITY;

-- Anyone can submit an appointment request (public contact form)
CREATE POLICY "Anyone can submit appointment requests"
ON public.appointment_requests
FOR INSERT
TO anon, authenticated
WITH CHECK (
  length(name) > 0 AND length(name) <= 100
  AND length(phone) > 0 AND length(phone) <= 30
  AND (message IS NULL OR length(message) <= 1000)
);

-- No public read access; only service role (server-side) can read
-- Admins can be added later via a user_roles table