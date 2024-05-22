using api_reservas.Models;
using System.ComponentModel.DataAnnotations;

namespace api_reservas.Controllers.DTO
{
    public class RegisterDTO
    {
        private string _passwordHash;
        public string Nome { get; set; }
        public EmailAddressAttribute Email { get; set; }
        public string Cnpj { get; set; }
        public Condomino[]? Condominos { get; set; }
        public Local[]? Locais { get; set; }
        public Reserva[]? Reservas { get; set; }
        public string Cpf { get; set; }
        public bool isCondomino { get; set; }

        public string Password
        {
            get { return _passwordHash; }
            set
            {
                // Check if the provided password is null or empty
                if (string.IsNullOrEmpty(value))
                {
                    throw new ArgumentException("Password cannot be null or empty");
                }

                // Hash the password using bcrypt and set the hashed value
                //_passwordHash = BCrypt.Net.BCrypt.HashPassword(value);
            }
        }
    }
}

