// Generate a unique id/code

const uid = () => {
   const start = Date.now().toString(36) // Converts the timestamp to a binary using alpha-numeric data (36)
   const end = Math.random().toString(36).substring(2) // Converts the ramdom number between 0 and 1 to a binary and then excludes the zero and dot (2)
   return start + end // Return both converted data
}

console.log(uid())