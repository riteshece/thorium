let mid1=router.get("/users/:userId", userController.getUserData)

let mid2=router.put("/users/:userId", userController.updateUser)

let mid3=router.delete("/users/:userId", userController.deleteUser)
