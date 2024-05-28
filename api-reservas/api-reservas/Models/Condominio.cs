using api_reservas.Models.BaseModels;
using api_reservas.Models.Dtos;
using System.ComponentModel.DataAnnotations;

namespace api_reservas.Models
{
    public class Condominio : BaseUser
    {
        public Condominio() { }
        public Condominio(RegisterDTO entity)
        {
            Name = entity.Nome;
            Email = entity.Email;
            CNPJ = entity.Cnpj;
            Password = entity.Password;
        }

        [Required(ErrorMessage = "O Nome do Condominio é obrigatório")]
        [MaxLength(50, ErrorMessage = "O tamanho não pode exceder 50 caracteres")]

        public string CNPJ { get; set; }
        public Condomino[]? Condominos { get; set; } 
        public Local[]? Locais { get; set; }
        public Reserva[]? Reservas { get; set; }
    }
}
