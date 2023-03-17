// Add JavaScript below
import { createClient } from "https://cdn.skypack.dev/@supabase/supabase-js@2.8.0"

const supabaseUrl = 'https://kzqhrqmvueyaeacxvynt.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt6cWhycW12dWV5YWVhY3h2eW50Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzcxODU1NjcsImV4cCI6MTk5Mjc2MTU2N30.OAtnGVjtA1rEDT7EFrm8ZfMaNt7YCpx-kkR3z4pJsJs'
const supabase = createClient(supabaseUrl, supabaseKey)
async function getBooks(){
  
  let { data: Books, error } = await supabase
    .from('Books')
    .select('*')

  for (let book of Books){
    let bookList = document.getElementById('Books');
    bookList.innerHTML += `<tr><td>${book.title} 
    </td><td>${book.author}
    </td><td>${book.isbn}
    </td><td>${book.description}
    </td></tr>`;

  }
}

getBooks();