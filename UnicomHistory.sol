//研究院大事记智能合约，将重要事件记录到区块链
//采用以太坊智能合约规范solidity编写

pragma solidity ^0.4.24;
pragma experimental ABIEncoderV2;

contract UnicomHistory {
    
    address public creator;
    uint hisCount = 0;
    
	//事件数据结构
    struct HisEntry {
        bytes4 day;			//发生日期
        string title;		//标题
        string writer;		//编写者
        string content;		//事件内容
    }
    
    mapping(bytes4 => HisEntry[]) private dayBook;     //某天的纪录，如20180810
    mapping(bytes3 => HisEntry[]) private monthBook;   //某月的纪录，如201808
    mapping(bytes2 => HisEntry[]) private yearBook;    //某年的纪录，如2018
                      HisEntry[]  private allBook;     //全部记录
    
    constructor() public {
        creator = msg.sender;
    }
    
	//记录事件
    function record(bytes4 day, bytes2 time, string title, string writer, string content) public payable returns (bool success) {
        HisEntry memory hisEntry = HisEntry({day:day, title:title, writer:writer, content:content});
        bytes3 month = bytes3(day);
        bytes2 year = bytes2(day);
        dayBook[day].push(hisEntry);
        monthBook[month].push(hisEntry);
        yearBook[year].push(hisEntry);
        allBook.push(hisEntry);
        hisCount ++;
        return true;
    }
    
	//按天提取事件列表
    function retriveByDay(bytes4 day) public view returns (HisEntry[] hisEntries, uint length) {
        return (dayBook[day], dayBook[day].length);
    }
    
	//按月提取事件列表
    function retriveByMonth(bytes3 month) public view returns (HisEntry[] hisEntries, uint length) {
        return (monthBook[month], monthBook[month].length);
    }
    
	//按年提取事件列表
    function retriveByYear(bytes2 year) public view returns (HisEntry[] hisEntries, uint length) {
        return (yearBook[year], yearBook[year].length);
    }
    
	//提取全部事件
    function retriveAll() public view returns (HisEntry[] hisEntries, uint length) {
        return (allBook, allBook.length);
    }
    
	//获取事件总数
    function totalHisCount() public view returns (uint count) {
        return hisCount;
    }
    
}