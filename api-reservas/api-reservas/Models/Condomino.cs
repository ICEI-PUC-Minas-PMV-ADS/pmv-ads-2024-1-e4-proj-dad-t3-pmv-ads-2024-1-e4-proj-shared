using System.ComponentModel.DataAnnotations;
using api_reservas.Models.BaseModels;
using api_reservas.Models.Dtos;

namespace api_reservas.Models
{
    public class Condomino : BaseUser
    {

        public Condomino()
        {
        }
        public Condomino(CreateUserDTO entity)
        {
            Name = entity.Nome;
            Email = entity.Email;
            CPF = entity.Cpf;
            Password = entity.Password;
        }

        [RegularExpression("^[0-9]{13}$", ErrorMessage = "O CPF deve conter exatamente 13 dígitos")]
        public string CPF { get; set; }
        public Reserva[]? Reservas { get; set; }
    }
}
