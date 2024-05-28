using api_reservas.Models.BaseModels;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace api_reservas.Models.Dtos
{


    public class CreateUserDTO : BaseEntity
    {

        public CreateUserDTO(RegisterDTO registerDTO)
        {
            Nome = registerDTO.Nome;
            Email = registerDTO.Email;
            Password = registerDTO.Password;
            isCondominio = registerDTO.isCondominio;
            if(isCondominio)
                Cnpj = registerDTO.Cnpj;
            else
                Cpf = registerDTO.Cpf;
        }

        private string _passwordHash;
        public string Nome { get; set; }
        public string Email { get; set; }
        public string Cnpj { get; set; }
        public string Cpf { get; set; }
        public bool isCondominio { get; set; }
        public string PasswordSalt { get; set; }

        public string Password
        {
            get { return _passwordHash; }
            set
            {
                // -- Check if the provided password is null or empty
                if (string.IsNullOrEmpty(value))
                {
                    throw new ArgumentException("Password cannot be null or empty");
                }

                // -- Hash the password using bcrypt and set the hashed value
                _passwordHash = HashPassword(value);
            }
        }

        private string HashPassword(string password)
        {
            string salt = BCrypt.Net.BCrypt.GenerateSalt();
            PasswordSalt = salt;
            return BCrypt.Net.BCrypt.HashPassword(password, salt);
        }
    }
}

