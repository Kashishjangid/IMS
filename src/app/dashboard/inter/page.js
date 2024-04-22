"use client"
import React, { useEffect } from 'react';

const Page = () => {
  useEffect(() => {
    const fun = async () => {
      try {
        const res = await fetch("http://localhost/ims/public/product", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0L2ltcy9wdWJsaWMvYXBpL2xvZ2luIiwiaWF0IjoxNzEyODQxNTk3LCJleHAiOjE3MTI5Mjc5OTcsIm5iZiI6MTcxMjg0MTU5NywianRpIjoieERyUDZxSkZONGI4dlMxOCIsInN1YiI6IjIiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.am0tt4z1DFiJJoa4NvLgvjX0aS0w0CgN73Cg0QA1864"
          },
          cache: "no-store"
        });

        if (!res.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await res.json();
        console.log(data);
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    };

    fun();
  }, []);

  return (
    <div>
      {/* Your JSX content */}
    </div>
  );
};

export default Page;

