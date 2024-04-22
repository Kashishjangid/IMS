// import { cookies } from "next/headers";

export async function login(credentials) {
    const response = await fetch("http://192.168.1.82/ims/public/api/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });
  
    if (!response.ok) {
      throw new Error('Login failed');
    }

    
    
  
    const data = await response.json();
    localStorage.setItem('token', data.access_token);
    alert(data.access_token);
  }