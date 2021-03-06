// SingleNFT token
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract SingleNFT is ERC721 {
    using SafeMath for uint256;

    uint256 constant public PERCENTS_DIVIDER = 100;
	uint256 constant public FEE_MAX_PERCENT = 20; // 20 %
    uint256 constant public FEE_MIN_PERCENT = 1; // 1 %

    string public collection_name;
    string public collection_uri;
    bool public isPublic;
    address public factory;
    address public owner;

    struct Item {
        uint256 id;
        address creator;
        string uri;
        uint256 royalty;
    }
    uint256 public currentID;    
    mapping (uint256 => Item) public Items;


    event CollectionUriUpdated(string collection_uri);    
    event CollectionNameUpdated(string collection_name);
    event CollectionPublicUpdated(bool isPublic);
    event TokenUriUpdated(uint256 id, string uri);

    event ItemCreated(uint256 id, address creator, string uri, uint256 royalty);
    event Burned(address owner, uint nftID);

    constructor() ERC721("SingleNFT","SingleNFT") {
        factory = msg.sender;
    }

    /**
		Initialize from Swap contract
	 */
    function initialize(
        string memory _name,
        string memory _uri,
        address creator,
        bool bPublic
    ) external {
        require(msg.sender == factory, "Only for factory");
        collection_uri = _uri;
        collection_name = _name;
        owner = creator;
        isPublic = bPublic;
    }

    
    /**
		Change & Get Collection Information
	 */
    function setCollectionURI(string memory newURI) public onlyOwner {
        collection_uri = newURI;
        emit CollectionUriUpdated(newURI);
    }

    function setName(string memory newname) public onlyOwner {
        collection_name = newname;
        emit CollectionNameUpdated(newname);
    }

    function setPublic(bool bPublic) public onlyOwner {
        isPublic = bPublic;
        emit CollectionPublicUpdated(isPublic);
    }
    function getCollectionURI() external view returns (string memory) {
        return collection_uri;
    }
    function getCollectionName() external view returns (string memory) {
        return collection_name;
    }


    /**
		Change & Get Item Information
	 */
    function addItem(string memory _tokenURI, uint256 royalty) public returns (uint256){
        require(royalty <= FEE_MAX_PERCENT, "too big royalties");
        require(royalty >= FEE_MIN_PERCENT, "too small royalties");
        currentID = currentID.add(1);        
        _safeMint(msg.sender, currentID);
        Items[currentID] = Item(currentID, msg.sender, _tokenURI, royalty);
        emit ItemCreated(currentID, msg.sender, _tokenURI, royalty);
        return currentID;
    }

    function burn(uint _tokenId) external returns (bool)  {
        require(_exists(_tokenId), "Token ID is invalid");
        require(ERC721.ownerOf(_tokenId) == msg.sender, "only owner can burn");
        _burn(_tokenId);
        emit Burned(msg.sender,_tokenId);
        return true;
    }

    function setTokenURI(uint256 _tokenId, string memory _newURI)
        public
        creatorOnly(_tokenId)
    {
        Items[_tokenId].uri = _newURI;
        emit TokenUriUpdated( _tokenId, _newURI);
    }



    function tokenURI(uint256 tokenId) public view override returns (string memory) {
        require(_exists(tokenId), "ERC721Metadata: URI query for nonexistent token");
        return Items[tokenId].uri;
    }    

    function creatorOf(uint256 _tokenId) public view returns (address) {
        return Items[_tokenId].creator;
    }

    function royalties(uint256 _tokenId) public view returns (uint256) {
        return Items[_tokenId].royalty;
	}




    modifier onlyOwner() {
        require(owner == _msgSender(), "caller is not the owner");
        _;
    }
    /**
     * @dev Require _msgSender() to be the creator of the token id
     */
    modifier creatorOnly(uint256 _id) {
        require(
            Items[_id].creator == _msgSender(),
            "ERC721Tradable#creatorOnly: ONLY_CREATOR_ALLOWED"
        );
        _;
    }
}
