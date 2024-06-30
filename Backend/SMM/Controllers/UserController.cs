//using Microsoft.AspNetCore.Authorization;
//using Microsoft.AspNetCore.Http;
//using Microsoft.AspNetCore.Mvc;
//using SMM.DataAccessLayer.Services.IServices;
//using SMM.Models.DTO;
//using System.Security.Claims;

//namespace SMM.Controllers
//{
//    [Route("api/[[user]]")]
//    [ApiController]
//    //[Authorize]


//    ///Session is not working// cookiee is not storing
//    public class UserController : ControllerBase
//    {
//        private readonly IUserService _userService;

//        public UserController(IUserService userService)
//        {
//            _userService = userService;
//        }
//        #region Authorization

//        private async Task<dynamic> CheckAuthorization()
//        {
//            string userId = HttpContext.User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
//            if (userId == null || userId == "")
//            {
//                return false;
//            }

//            return true;
//        }

//        #endregion


//        [HttpGet("dashboard")]
//        [Authorize]
//        public async Task<dynamic> Dashboard()
//        {
//            try
//            {
//                bool appUser = await CheckAuthorization();
//                if (appUser is false)
//                {
//                    return Unauthorized();
//                }


//                string userId = HttpContext.User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
//                UserDTO userDTO = await _userService.GetUserDetails(userId);
//                return Ok(userDTO);
//            }
//            catch (Exception ex)
//            {
//                throw ex;
//            }


//        }
//    }
//}
