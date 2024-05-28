using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;
using api_reservas.Models.BaseModels;

namespace api_reservas.Models
{
    public class Local : BaseEntity
    {
        public string Nome { get; set; }
    }
}
