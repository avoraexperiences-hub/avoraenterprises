
-- Form submissions table for all 4 form types
CREATE TABLE public.form_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  form_type TEXT NOT NULL CHECK (form_type IN ('avora_inquiry','crazy_ambassador','crazy_partner_college','crazy_ticket_inquiry')),
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  payload JSONB NOT NULL DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.form_submissions ENABLE ROW LEVEL SECURITY;

-- Anyone (anon) can submit a form
CREATE POLICY "Anyone can submit forms"
  ON public.form_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- No one can read by default (admin reads via service role from dashboard)
-- Intentionally no SELECT policy for public.

CREATE INDEX form_submissions_created_at_idx ON public.form_submissions (created_at DESC);
CREATE INDEX form_submissions_type_idx ON public.form_submissions (form_type);
