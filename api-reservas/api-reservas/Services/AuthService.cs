using api_reservas.Models;
using api_reservas.Models.Dtos;
using api_reservas.Repositories;
using MongoDB.Driver;

namespace api_reservas.Services
{
    public class AuthService : BaseService<Usuario>
    {
        private CondominoService _condominoService;
        private CondominioService _condominioService;

        public AuthService(MyMongoRepository repository, CondominioService condominioService, CondominoService condominoService) : base(repository)
        {
            _condominioService = condominioService;
            _condominoService = condominoService;
        }
        public async Task Login(LoginDto loginDTO)
        {
            // -- retrieve salt
            var condomino = await FindByEmail(loginDTO.Email);
            if (condomino == null)
            {
                Usuario usuario = await FindByEmail(loginDTO.Email);
                if (loginDTO.Password == usuario.Password)
                {
                    // -- return jwt
                }
            }
            else
            {
                if (loginDTO.Password == condomino.Password)
                {
                    // -- return jwt
                }
            }

        }


        public async Task<bool> CreateUserAsync(CreateUserDTO newUser)
        {
            try
            {
                // -- email check
                var condominoEmailCheck = await _condominoService.FindByEmail(newUser.Email);
                var condominioEmailCheck = await _condominioService.FindByEmail(newUser.Email);
                if (condominioEmailCheck != null || condominoEmailCheck != null)
                    throw new Exception("Email already in use.");

                // -- check user type
                if (newUser.isCondominio)
                {
                    var condominioCnpjCheck = await FindByCnpj(newUser.Cnpj);
                    if (condominioCnpjCheck != null) throw new Exception("Cnpj already in use.");
                    Condominio condominio = new Condominio(newUser);
                    await _condominioService.CreateAsync(condominio);
                    return true;
                }
                else
                {
                    var condominoCnpjCheck = await FindByCpf(newUser.Cpf);
                    if (condominoCnpjCheck != null) throw new Exception("Cpf already in use.");
                    Condomino condomino = new Condomino(newUser);
                    await _condominoService.CreateAsync(condomino);
                    return true;
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }

        }
        public async Task<Usuario> FindByEmail(string email)
        {
            return await this._collection.Find(x => x.Email == email).FirstOrDefaultAsync();
        }

        public async Task<Usuario> FindByCpf(string cpf)
        {
            return await _collection.Find(x => x.Cpf == cpf).FirstOrDefaultAsync();
        }

        public async Task<Usuario> FindByCnpj(string cnpj)
        {
            return await _collection.Find(x => x.Cnpj == cnpj).FirstOrDefaultAsync();
        }

    }
}
