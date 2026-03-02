 export const convertDate = (publishedAt) => {
         //convert to ago time
            const currentTime = new Date();
            const publishedTime = new Date(publishedAt);
            const timeDiff = currentTime - publishedTime;

            const seconds = Math.floor(timeDiff / 1000);
            const minutes = Math.floor(seconds / 60);
            const hours = Math.floor(minutes / 60);
            const days = Math.floor(hours / 24);
            const weeks = Math.floor(days / 7);
            const months = Math.floor(days / 30);
            const years = Math.floor(days / 365);

            if (years > 0) {
                return years + " years ago";
            } else if (months > 0) {
                return months + " months ago";
            } else if (weeks > 0) {
                return weeks + " weeks ago";
            } else if (days > 0) {
                return days + " days ago";
            } else if (hours > 0) {
                return hours + " hours ago";
            } else if (minutes > 0) {
                return minutes + " minutes ago";
            } else {
                return seconds + " seconds ago";
            }   
      


    }   

  export  const contentViews = (viewCount) => {
        if (viewCount < 1000) {
            return viewCount;
        } else if (viewCount < 1000000) {
            return (viewCount / 1000).toFixed(1) + "K";
        } else if (viewCount < 1000000000) {
            return (viewCount / 1000000).toFixed(1) + "M";
        } else {
            return (viewCount / 1000000000).toFixed(1) + "B";
        }
    }