import React from 'react'
import Button from './Button';

const ButtonListComponent = () => {
  // const list = ["All", "Music", "Gaming", "Live", "News", "Sports", "Comedy", "Cooking", "Education", "Technology", "Travel", "Fashion", "Health", "Fitness", "Animals", "Science", "Art", "History", "Business", "Finance"];
    const list = ["All", "Music", "Gaming", "Live", "News", "Sports", "Comedy", "Cooking", "Education", "Technology",  "Science", "Art", "History", "Business", "Finance"];
  return (
    <div className="flex p-4">
      {
        list.map((name) => {
          return <Button name={name} key={name}/>
        })
      }
    
    </div>
  )
}

export default ButtonListComponent;
