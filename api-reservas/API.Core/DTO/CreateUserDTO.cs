using api_reservas.Core.Models;
using System.Text.Json.Serialization;

namespace api_reservas.Core.Dtos
{
    public class CreateUserDTO
    {
        public string Nome { get; set; }
        public string Email { get; set; }
        public string Cnpj { get; set; }
        public string Cpf { get; set; }
        public bool isCondominio { get; set; }
        public string Password { get; set; }
        [JsonIgnore]
        public string PasswordSalt { get; set; }
        Condomino? Condomino { get; set; }
        Condominio? Condominio { get; set; }

    }
}

