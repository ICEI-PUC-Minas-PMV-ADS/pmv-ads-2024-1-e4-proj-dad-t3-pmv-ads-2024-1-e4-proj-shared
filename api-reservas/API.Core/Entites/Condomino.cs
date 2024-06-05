using System.ComponentModel.DataAnnotations;
using api_reservas.Core.Dtos;
using api_reservas.Core.Models.BaseModels;

namespace api_reservas.Core.Models
{
    public class Condomino : BaseEntity
    {

        public Condomino()
        {
        }
        public int UserId { get; set; }

        [RegularExpression("^[0-9]{13}$", ErrorMessage = "O CPF deve conter exatamente 13 dígitos")]
        public string CPF { get; set; }
        public Reserva[]? Reservas { get; set; }
    }
}
