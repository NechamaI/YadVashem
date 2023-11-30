using Microsoft.AspNetCore.Http;
using System.Net.Http;
using Dal;


namespace BL
{
    public class jpgOrNO
    {


        public static string[] typeOfFiles;
        public Dal.Node[] filesObject;

        public static string location;

        public static Dal.FileTree tree;
        public static Dal.Node[] createTree(Node location)
        {
            //chack if the location exist
            if (Directory.Exists(BL.jpgOrNO.location))
            {
                location.type = "folder";
                //create arr from the files in thus location
                string[] filesArr = Directory.GetFileSystemEntries(location.name);

                //array to keep the type of the files
                //BL.jpgOrNO.typeOfFiles = new string[filesArr.Length];
                location.children = new Dal.Node[filesArr.Length];

                //fund what the type of all file
                for (int i = 0; i < filesArr.Length;)
                {

                    location.children[i] = new Node();
                    location.children[i].name = filesArr[i];
                    if (Directory.Exists(filesArr[i]))
                    {
                        location.children[i].type = "folder";
                        //BL.jpgOrNO.typeOfFiles[i] = "folder";
                        location.children[i].children = createTree(location.children[i]);
                        i++;
                    }
                    else if (filesArr[i].Substring(filesArr[i].LastIndexOf('.')) == ".jpg" ||
                        filesArr[i].Substring(filesArr[i].LastIndexOf('.')) == ".JPG")
                    {
                        location.children[i].type = "jpg";
                        location.children[i].children = new Dal.Node[0];

                        //BL.jpgOrNO.typeOfFiles[i] = "jpg";
                        i++;
                    }
                    else
                    {
                        location.children[i].type = "no";
                        location.children[i].children = new Dal.Node[0];

                        //BL.jpgOrNO.typeOfFiles[i] = "no";
                        i++;
                    }

                }

            }
            return location.children;

        }
    }
}