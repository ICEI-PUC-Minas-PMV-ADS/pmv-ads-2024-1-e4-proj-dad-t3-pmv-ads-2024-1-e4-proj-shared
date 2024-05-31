using api_reservas.Helpers;
using api_reservas.Models;
using api_reservas.Models.BaseModels;
using api_reservas.Models.Config;
using api_reservas.Models.Dtos;
using api_reservas.Models.Interfaces;
using api_reservas.Repositories;
using Microsoft.IdentityModel.Tokens;
using MongoDB.Driver;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace api_reservas.Services
{
    public class AuthService : IAuthenticate
    {
        private CondominoService _condominoService;
        private CondominioService _condominioService;
        private readonly JwtSettings _jwtSettings;

        public AuthService(CondominioService condominioService, CondominoService condominoService, IConfiguration configutarion) 
        { 
            _condominioService = condominioService;
            _condominoService = condominoService;
            _jwtSettings = configutarion.GetSection("Jwt").Get<JwtSettings>();
        }
        public async Task Login(LoginDto loginDTO)
        {
            // -- retrieve salt
            var condomino = await _condominoService.FindByEmail(loginDTO.Email);
            if (condomino == null)
            {
                Condominio condominio = await _condominioService.FindByEmail(loginDTO.Email);
                if (loginDTO.Password == condominio.Password)
                {
                    // -- return jwt
                }
            }
            else
            {
                if (loginDTO.Password == condomino.Password)
                {
                    // -- return jwt
                }
            }

        }


        public async Task<bool> CreateUserAsync(CreateUserDTO newUser)
        {
            try
            {
                // -- email check
                var condominoEmailCheck = await _condominoService.FindByEmail(newUser.Email);
                var condominioEmailCheck = await _condominioService.FindByEmail(newUser.Email);

                var usuarioEmailCheck = await _usuarioService
                if (condominioEmailCheck != null || condominoEmailCheck != null)
                    throw new Exception("Email already in use.");

                // -- check user type
                if (newUser.isCondominio)
                {
                    var condominioCnpjCheck = await _condominioService.FindByCnpj(newUser.Cnpj);
                    if (condominioCnpjCheck != null) throw new Exception("Cnpj already in use.");
                    Condominio condominio = new Condominio(newUser);
                    await _condominioService.CreateAsync(condominio);
                    return true;
                }
                else
                {
                    var condominoCnpjCheck = await _condominoService.FindByCpf(newUser.Cpf);
                    if (condominoCnpjCheck != null) throw new Exception("Cpf already in use.");
                    Condomino condomino = new Condomino(newUser);
                    await _condominoService.CreateAsync(condomino);
                    return true;
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }

        }

        public string GenerateToken(BaseUser user)
        {
            var claims = new List<Claim>
            {
                new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
                new Claim(ClaimTypes.Email, user.Email.ToString()),
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

        public async Task<bool> UserExists(string email)
        {
            var condomino = await _condominioService.FindByEmail(email);
            var condominio = await _condominioService.FindByEmail(email);
            if (condomino != null || condominio != null)
                return true;
            else
                return false;
        }
 
    }
}





