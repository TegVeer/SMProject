1. User
2. Post
3. Chat
4. Message

User:{
User_Id: (Mongodb Unique Id),
Email: (String),
Password: (Hashed String),
Phone: (String),
Name: (String),
Date_Of_Birth: (Date),
Gender: (Predefined String Constant),
Age: (Number),
Following: (Array[] of userIds),
Followers: (Array[] of userIds),
Posts: (Array[] of postIds),
Liked_Posts: (Array[] of postIds),
Shared_Posts: (Array[] of postIds),
Location: (String),
Profile_Image: (String Uri),
Cover_Image: (String Uri),
Bio: (String),
UserName: (String)
}

Post:{
Post_Id: (Mongodb Unique Id),
Publisher_ID: (User_Id),
Post_Type: (Predefined String Constant),
Post_Text: (String),
Post_Media_Files: (Arra[] of Media File's Url),
Mentioned_Post: (PostId),
Mentions: (Array[] of PostIds),
Comments: (Array[] of PostIds),
ParentPost: (PostId),
Published_Time: (Time with Date),
Edited: (Array[] of Edit Object: {PostType,Post_Text,PostMedia,})
}

Chat: {
First_Person:(UserId),
Chats:(Array[] of Object{Second_Person: (UserId), Messages:(Array[] of MessageID) })
}

Message:{
Message_Id:(Mongodb Unique Id),
From: (UserId),
Message_Type: (Predefined String Constant),
Message_Text: (String),
Message_Media_File: (Srting Url),
Published_Time:(Time)
}
