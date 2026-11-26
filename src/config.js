export const config = {
 email: 'contact@ctrl-up.ro',
 // Confirm the new public LinkedIn page URL before adding it here.
 linkedin: '',
 // Enable only after reviewing your Formspree account and privacy documentation.
 formEndpoint: import.meta.env.VITE_FORMSPREE_ENDPOINT || '',
 // Put finished PDF files into public/resources/ebooks and set available to true.
 books: [
  {language:'Romanian', code:'RO', path:'/resources/ebooks/corporate-guide-ro.pdf', available:false},
  {language:'English', code:'EN', path:'/resources/ebooks/corporate-guide-en.pdf', available:false},
  {language:'German', code:'DE', path:'/resources/ebooks/corporate-guide-de.pdf', available:false},
  {language:'French', code:'FR', path:'/resources/ebooks/corporate-guide-fr.pdf', available:false},
  {language:'Spanish', code:'ES', path:'/resources/ebooks/corporate-guide-es.pdf', available:false},
  {language:'Italian', code:'IT', path:'/resources/ebooks/corporate-guide-it.pdf', available:false},
 ]
};
