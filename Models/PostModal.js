export default class Post {
  constructor(
    postId,
    userName,
    userProfileImageUrl,
    postImagesUrlList,
    postMessage,
    noOfLikes,
    commentsIdList,
    postCreationTime,
    noOfComments,
    noOfShares
  ) {
    this.postId = postId;
    this.userName = userName;
    this.userProfileImageUrl = userProfileImageUrl;
    this.postImagesUrlList = postImagesUrlList;
    this.postMessage = postMessage;
    this.noOfLikes = noOfLikes;
    this.commentsIdList = commentsIdList;
    this.postCreationTime = postCreationTime;
    this.noOfComments = noOfComments;
    this.noOfShares = noOfShares;
  }
}
