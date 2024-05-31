using api_reservas.Models.BaseModels;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace api_reservas.Models.Dtos
{


    public class GetCondominoDTO : BaseEntity
    {
        public string Nome { get; set; }
        public string Email { get; set; }
        public string Cpf { get; set; }

    }
}

