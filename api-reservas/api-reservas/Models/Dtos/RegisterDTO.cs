using api_reservas.Models;
using api_reservas.Models.BaseModels;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace api_reservas.Models.Dtos
{
    public class RegisterDTO
    {
        public string Nome { get; set; }
        public string Email { get; set; }
        public string Cnpj { get; set; }
        public string Cpf { get; set; }
        public bool isCondominio { get; set; }
        public string Password { get; set; }

    }
}

