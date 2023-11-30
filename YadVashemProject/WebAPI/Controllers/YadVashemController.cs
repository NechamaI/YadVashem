using Dal;
using Microsoft.AspNetCore.Mvc;
using System.Security.Cryptography.X509Certificates;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class YadVashemController : Controller
    {
        public string newLocation = "";

        public YadVashemController() { }

        //chack if the location exists
        //fanction thet get the location and make form arr the files

        [HttpPost("SendLocationServe")]
        public ActionResult SendLocationServe([FromForm] string newLocation)
        {
            BL.jpgOrNO.location = newLocation;
            Dal.Node root = new Dal.Node();
            root.name = newLocation;
            //chack if the location exist
                //root.rootName = newLocation;
            root.children = BL.jpgOrNO.createTree(root);
            return Ok(root);

        }

        //send the list to client
        //[HttpGet("sendListToClient")]
        //public ActionResult sendListToClient()
        //{
        //    string[] allList = Directory.GetFileSystemEntries(BL.jpgOrNO.location); ;
        //    return Ok(allList.ToList());
        //}

        ////send the files list to client
        //[HttpGet("SendFileListToClient")]
        //public ActionResult SendFileListToClient()
        //{
        //    return Ok(BL.jpgOrNO.filesArr.ToList());
        //}

        ////send the type of files to client
        //[HttpGet("SendTypeFileListToClient")]
        //public ActionResult SendTypeFileListToClient()
        //{
        //    return Ok(BL.jpgOrNO.typeOfFiles.ToList());
        //}


    }
}
