using api_reservas.Core.Dtos;
using api_reservas.Core.Models.BaseModels;
using api_reservas.Core.Models.Config;
using api_reservas.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace api_reservas.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        //private readonly JwtMiddleware _jwtService;
        private readonly AuthService _authService;
        private readonly JwtSettings _jwtSettings;
        public AuthController(AuthService repo, IConfiguration configutarion, JwtSettings jwtSettings) 
        {
            _authService = repo;
            _jwtSettings = configutarion.GetSection("Jwt").Get<JwtSettings>();
            _jwtSettings = jwtSettings;
        }


        // -- POST REGISTRO
        [HttpPost("registro")]
        public async Task<IActionResult> RegisterUser(CreateUserDTO newUser)
        {
            var token = await _authService.CreateUserAsync(newUser, _jwtSettings);
            if(string.IsNullOrEmpty(token.ToString()))
            {
                return BadRequest("Failed to create user");
            }
            else return Ok(token);  
        }

        // -- POST LOGIN
        [HttpPost("entrar")]
        public async Task<IActionResult> Authenticate(LoginDto user)
        {
            var token = await _authService.Login(user, _jwtSettings);
            if (string.IsNullOrEmpty(token.ToString()))
            {
                return BadRequest("Failed authenticate user");
            }
            else return Ok(token);
        }



        //public async Task<bool> UserExists(string email)
        //{
        //    //var condomino = await _condominioService.FindByEmail(email);
        //    //var condominio = await _condominioService.FindByEmail(email);
        //    //if (condomino != null || condominio != null)
        //    //    return true;
        //    //else
        //    //    return false;
        //}

    }
}
