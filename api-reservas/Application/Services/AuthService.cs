using api_reservas.Core.Dtos;
using api_reservas.Core.Interfaces;
using api_reservas.Core.Models;
using api_reservas.Core.Models.BaseModels;
using api_reservas.Core.Models.Config;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace api_reservas.Services
{
    public class AuthService : IAuthenticate
    {
        private CondominoService _condominoService;
        private CondominioService _condominioService;
        private UserService _userService;
        

        public AuthService(CondominioService condominioService, CondominoService condominoService, UserService userService) 
        { 
            _condominioService = condominioService;
            _condominoService = condominoService;
            _userService = userService;
        }
        public async Task<string> Login(LoginDto loginDTO, JwtSettings _jwtSettings)
        {
            // -- retrieve user and authenticat
            var user = await _userService.FindByEmail(loginDTO.Email);
            if (user == null) throw new Exception("Invalid credentials.");
            loginDTO.Salt = user.PasswordSalt;
            if(loginDTO.Password != user.Password) throw new Exception("Invalid credentials.");

            // -- generate 
            var token = GenerateToken(user, _jwtSettings);
            return token;
        }


        public async Task<bool> CreateUserAsync(CreateUserDTO newUser)
        {
            try
            {
                // -- email check
                var user = await _userService.FindByEmail(newUser.Email);
                if (user != null) throw new Exception("Email already in use.");

                if (newUser.isCondominio)
                {
                    var condominioCnpjCheck = await _condominioService.FindByCnpj(newUser.Cnpj);
                    if (condominioCnpjCheck != null) throw new Exception("Cnpj already in use.");
                } else
                {
                    var condominoCnpjCheck = await _condominoService.FindByCpf(newUser.Cpf);
                    if (condominoCnpjCheck != null) throw new Exception("Cpf already in use.");
                }

                // -- criar novo usuario
                Usuario createUser = new Usuario(newUser);
                string? newUserId = _userService.CreateAsync(createUser);   

                if(string.IsNullOrEmpty(newUserId)) throw new Exception("Database is unavailable. Please contact support.");
                
                if (newUser.isCondominio)
                {

                } else
                {

                }
                    await _
                // -- Uma colecao apenas, Usuario, que tera dentro dele o objeto condomino/condominio
                return true;
            }
            catch (Exception ex)
            {
                throw ex;
            }

        }

        public string GenerateToken(Usuario user, JwtSettings _jwtSettings)
        {
            var claims = new List<Claim>
            {
                new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
                new Claim(ClaimTypes.Actor, user.IsCondominio.ToString()),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
            };

            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_jwtSettings.Key));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.UtcNow.AddMinutes(_jwtSettings.TokenExpireInMinutes),
                SigningCredentials = credentials,
                Issuer = _jwtSettings.Issuer,
                Audience = _jwtSettings.Audience,
            };

            var tokenHandler = new JwtSecurityTokenHandler();
            var securityToken = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(securityToken);

        }



    }
}





