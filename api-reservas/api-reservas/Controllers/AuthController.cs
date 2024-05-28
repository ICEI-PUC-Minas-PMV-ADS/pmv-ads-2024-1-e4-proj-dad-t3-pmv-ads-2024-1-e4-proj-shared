using api_reservas.Helpers;
using api_reservas.Models;
using api_reservas.Models.Dtos;
using api_reservas.Services;
using Microsoft.AspNetCore.Mvc;

namespace api_reservas.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        //private readonly JwtMiddleware _jwtService;
        private readonly AuthService _authService;
        public AuthController(AuthService repo) 
        {
            _authService = repo;
            //_jwtService = jwtMiddleare;
        }
        //public AuthControler(AuthService authService) => _authService = authService;

        // -- POST REGISTRO
        [HttpPost("registro")]
        public async Task<IActionResult> RegisterUser(RegisterDTO entity)
        {
            CreateUserDTO newUser = new CreateUserDTO(entity);
            if (await _authService.CreateUserAsync(newUser))
                return Ok("User created successfully");
            else return BadRequest("Failed to create user"); 
        }

        //// -- POST LOGIN
        //[HttpPost("entrar")]
        //public async Task<IActionResult> Authenticate(LoginDto user)
        //{
        //    await _authService.Login(user);
        //}

    }
}
