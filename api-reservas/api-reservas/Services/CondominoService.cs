using api_reservas.Models;
using api_reservas.Repositories;
using MongoDB.Driver;

namespace api_reservas.Services
{
    public class CondominoService : BaseService<Condomino>
    {
        private readonly IMongoCollection<Condomino> _collection;
        public CondominoService(MyMongoRepository repository) : base(repository)
        {
        }

        public async Task<Condomino> FindByEmail(string email)
        {
            return await _collection.Find(x => x.Email == email).FirstOrDefaultAsync();
        }

        public async Task<Condomino> FindByCpf(string cpf)
        {
            return await _collection.Find(x => x.CPF == cpf).FirstOrDefaultAsync();
        }

        public async Task<Condomino> CreateCondominoAsync(Condomino condomino)
        {
           await _collection.InsertOneAsync(condomino);
           var condoCreated = await FindByCpf(condomino.CPF);
           return condoCreated;
        }

    }
}
