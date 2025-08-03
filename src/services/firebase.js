import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push, set } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAnZxfaXJuKLLHsIgvKa64l9AOGdsRdR84",
  authDomain: "ydcoders-7ded1.firebaseapp.com",
  databaseURL: "https://ydcoders-7ded1-default-rtdb.firebaseio.com",
  projectId: "ydcoders-7ded1",
  storageBucket: "ydcoders-7ded1.firebasestorage.app",
  messagingSenderId: "63450915691",
  appId: "1:63450915691:web:d0cdf8bdca8a70b8dde22e"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Contact form submission
export const submitContactForm = async (formData) => {
  try {
    const contactRef = ref(database, 'responses');
    await push(contactRef, {
      ...formData,
      timestamp: new Date().toISOString()
    });
    return { success: true };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return { success: false, error: error.message };
  }
};

// Career application submission
export const submitCareerApplication = async (applicationData) => {
  try {
    const careersRef = ref(database, 'career_applications');
    await push(careersRef, {
      ...applicationData,
      timestamp: new Date().toISOString()
    });
    return { success: true };
  } catch (error) {
    console.error('Error submitting career application:', error);
    return { success: false, error: error.message };
  }
};

export { database };
