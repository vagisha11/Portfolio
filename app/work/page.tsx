import { redirect } from 'next/navigation';

// Redirect /work to home, since "work" section is part of the main page
export default function WorkPage() {
  redirect('/#work');
}
