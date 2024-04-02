function getUserById(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const users = {
        1: { id: 1, name: "Jack" },
        2: { id: 2, name: "Jill" },
      };

      const user = users[id];

      if (!user) {
        throw new Error("Invalid user!");
      }

      resolve(user);
    }, 2000);
  });
}

async function getUserData() {
  try {
    // 1 or 2 will resolve, any other number will reject, throwing the error.
    const user = await getUserById(2);
    console.log(`User found: ${user.name}`);
  } catch (err) {
    console.log(`Error: ${err}`);
  }
}

getUserData();
