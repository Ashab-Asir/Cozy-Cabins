import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://quspfurlhyjelrremzah.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF1c3BmdXJsaHlqZWxycmVtemFoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzEzMjA0ODAsImV4cCI6MjA0Njg5NjQ4MH0.a3DR30VT7KOWTqIcDwBuDwCYGFp-_7BAIjLNASdpH14";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
