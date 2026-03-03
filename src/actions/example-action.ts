"use server"

export async function exampleAction() {
  // Simulate a server action
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return {
    message: "Hello from the server!",
  }
}
