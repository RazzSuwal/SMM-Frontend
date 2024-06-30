//using Microsoft.AspNetCore.Identity;
//using SMM.Data;
//using SMM.DataAccessLayer.Services.IServices;
//using SMM.Models.DTO;
//using System.Linq;
//using System.Threading.Tasks;

//namespace SMM.DataAccessLayer.Services.Services
//{
//    public class UserService : IUserService
//    {
//        private readonly AppDbContext _db;

//        public UserService(AppDbContext db)
//        {
//            _db = db;
//        }

//        public Task<UserDTO> GetUserDetails(string id)
//        {
//            var user = _db.ApplicationUsers.FirstOrDefault(u => u.Id == id);
//            if (user != null)
//            {
//                UserDTO userDTO = new UserDTO
//                {
//                    Email = user.Email,
//                    ID = user.Id,
//                    Name = user.Name,
//                    PhoneNumber = user.PhoneNumber
//                };
//                return Task.FromResult(userDTO);
//            }
//            return Task.FromResult<UserDTO>(null);
//        }
//    }
//}
