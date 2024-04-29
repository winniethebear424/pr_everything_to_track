


@RestController
class UserService {
    @GetMapping('/users/{id}')
    fun getUser(@PathVariable id: Long): User{
        return User(id, "John Doe")
    }
    @PostMapping('/users')
    fun createUser(@RequestBody user: User): User{
        return user
    }
}