// ==UserScript==
// @name         xxxx 简中汉化脚本
// @namespace    https://www.g8hh.com.cn/
// @version      0.0.1
// @description  网页游戏 xxxxx (https://www.xxxxx.com/) 的简体中文汉化脚本。Simplified Chinese i18n script for web game xxxxx.
// @author       好阳光的小锅巴 & 麦子
// @copyright    锅巴汉化
// @contributionUR    https://gityx.com/donate/intro.html
// @icon         https://www.zed.city/icons/favicon.svg
// @license      MIT
// @include      *dream-incremental*
// @grant        none
// @website      https://www.gityx.com/
// @updateURL    https://g8hh.com.cn/zh/tampermonkey/dream-incremental-chs.user.js
// @downloadURL    https://g8hh.com.cn/zh/tampermonkey/dream-incremental-chs.user.js
// ==/UserScript==
/**
 * ---------------------------
 * Time: 2026/05/11 13:52
 * Author: guoba
 * View: https://www.gityx.com/
 * ---------------------------
 */
//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //设置
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "points": "点数",
    "Reset for +": "重置得到 + ",
    "Currently": "当前",
    "Effect": "效果",
    "Cost": "成本",
    "Goal:": "目标:",
    "Reward": "奖励",
    "Start": "开始",
    "Exit Early": "提前退出",
    "Finish": "完成",
    "Milestone Gotten!": "获得里程碑！",
    "Milestones": "里程碑",
    "Completed": "已完成",
    "Default Save": "默认存档",
    "Delete": "删除",
    "No": "否",
    "Saves": "存档",
    "Options": "选项",
    "Yes": "是",
    "Are you sure?": "你确定吗？",
    "Edit Name": "编辑名称",
    "Info": "信息",
    "Currently:": "当前:",
    "Appearance": "外观",
    "How the game looks.": "游戏看起来如何。",
    "Theme": "主题",
    "Show milestones": "显示里程碑",
    "Show TPS meter at the bottom-left corner of the page.": "在页面左下角显示 TPS。",
    "Show TPS": "显示 TPS",
    "None": "无",
    "Align modifier units": "对齐概览单位",
    "Align numbers to the beginning of the unit in modifier view.": "在概览视图中将数字与单元的开头对齐。",
    "Select which milestones to display based on criterias.": "根据标准选择要显示的里程碑。",
    "All": "全部",
    "Classic": "经典",
    "Configurable": "可配置",
    "Duplicate": "复制",
    "Mute": "静音",
    "Unmute": "播放",
    "Email": "邮箱",
    "Password": "密码",
    "Forgot Password?": "忘记密码?",
    "Login": "登录",
    "or": "或",
    "Play as Guest": "以游客身份进行游戏",
    "Register": "注册",
    "Sign in with Google": "使用 Google 账户授权登录",
    "alchemy": "炼金",
    "Alchemy": "炼金",
    "Cooking": "烹饪",
    "cooking": "烹饪",
    "firemaking": "生火",
    "Firemaking": "生火",
    "fishing": "钓鱼",
    "Fishing": "钓鱼",
    "Woodcutting": "伐木",
    "woodcutting": "伐木",
    "crafting": "制作",
    "Crafting": "制作",
    "hunting": "狩猎",
    "Hunting": "狩猎",
    "Mining": "采矿",
    "mining": "采矿",
    "Monsters": "怪物",
    "You": "你",

        //设置
        'Dream Incremental':'梦境增量',
        'Save': '保存',
        "Settings": "设置",
        'Data':'存档数据',
        'Hard Reset':'硬重置',
        'Export Save':'导出存档',
        'Import Save':'导入存档',
        'Automation':'自动化',

        //Automation 自动化
        'Memory Upgrades Autobuyer: ON': '记忆升级自动购买：开启',
        'Memory Upgrades Autobuyer: OFF': '记忆升级自动购买：关闭',
        'Dream Upgrades Autobuyer: ON': '梦境升级自动购买：开启',
        'Dream Upgrades Autobuyer: OFF': '梦境升级自动购买：关闭',
        'Auto Buy Void Upgrades: ON': '自动购买虚空升级：开启',
        'Auto Buy Void Upgrades: OFF': '自动购买虚空升级：关闭',

        //Memory Upgrades 记忆升级
        'Memory Upgrades':'记忆升级',
        'Bought!': '已购买！',

        //Dreamify 梦境
        'Dreamify':'梦境',
        'Dreamifying will reset your Memory and Memory Upgrades.': '“梦境”将重置你的记忆和记忆升级。',
        'Wake up': '醒来',
        'You need 10,000 Memories': '你需要 10,000 记忆',

        'Dream Upgrades':'梦境升级',

        //Rest 休息
        'Rest':'休息',
        'Resting will reset all Memory and Memory Upgrades (except permanent) and also all Dream and Dream Upgrades': '休息将重置所有记忆和记忆升级（永久除外），以及所有梦境和梦境升级。',
        'Meet the requirement to Rest': '需要满足休息的条件',

        '2x Memories, 1.5x Dreams':'2x 记忆，1.5x 梦境',
        '+25% Dreams per Rest starting at 2 Rests': '从第 2 次休息开始，每次休息梦境 +25%',
        '5x Memories, 2x Dreams, passively generate 1% of Dreams per second.': '5x 记忆，2x 梦境，每秒被动生成 1% 的梦境。',
        'Automate Memory Upgrades.': '自动升级记忆。',
        'Automate Dream Upgrades but 1.5x Rest Scalings.': '自动升级梦境，但休息缩放为 x1.5。',
        '3x Dreams and Memories but 1.6x Rest Scalings.': '3x 梦境和记忆，但休息缩放为 x1.6。',
        '10x Memories and 5x Dreams': '10x 记忆和 5x 梦境',
        '+100 Memory Buyable 2 Cap.': '记忆可购买项 2 上限 +100。',
        'Unlock the next layer. 1e100x Rest scalings.': '解锁下一层。休息缩放 x1e100。',

        //Lucidify 清醒
        'Lucidify': '清醒',
        'Lucidifying will reset Everything before this.': '“清醒”将重置此前的所有内容。',
        'Lucid Dream Upgrades': '清醒梦境升级',

        '1.25x Lucid Dreams, 3x Dreams':'1.25x 清醒梦境，3x 梦境',
        '100x Lucid Energy, 10x Memories':'100x 清醒能量，10x 记忆',
        '1,000x Lucid Energy, 50x Memories':'1,000x 清醒能量，50x 记忆',
        '^1.3 Lucid Energy, 333.3x Memories':'^1.3 清醒能量，333.3x 记忆',
        '1e9x Lucid Energy, 10,000x Memories':'1e9x 清醒能量，10,000x 记忆',
        'remember.': '记住。',
        '1e20x Lucid Energy, ^1.25 Memories':'1e20x 清醒能量，^1.25 记忆',
        '1e45x Lucid Energy, 100x Dreams, 10x Lucid Dreams':'1e45x 清醒能量，100x 梦境，10x 清醒梦境',
        '1e100x Lucid Energy, ^1.25 Memories':'1e100x 清醒能量，^1.25 记忆',

        //Infinitize 无限
        'Infinitize':'无限',
        'You reached your Memory limit, all your memories will be converted to Infinite Memories': '你已达到记忆上限，你所有的记忆将被转换为无限记忆。',
        'Resets everything (yes, everything) at this point': '此时重置所有内容（是的，所有内容）。',
        'You need 1.79e308 Memories': '你需要 1.79e308 记忆',

        'Infinity Milestones':'无限里程碑',
        '+1 Rest Bulk':'+1 批量休息',
        '+100% Lucid Dreams per Infinitize': '每次无限化 +100% 清醒梦境',
        'Dreams Reset nothing': '梦境不重置任何内容',
        '+2 Rest Bulk':'+2 批量休息',
        'Break Infinity': '突破无限',
        'Unlock ???':'解锁 ？？？',

        'Infinitize Upgrades':'无限升级',
        'Infinitize Challenges':'无限挑战',
        'Infinity Challenges':'无限挑战',
        'Warning: Entering/Exitting a Challenge performs a Infinitize Reset': '警告：进入/退出挑战将执行一次无限化重置。',

        'Start Challenge':'开始挑战',
        'Exit Challenge':'退出挑战',
        'Challenge Completed': '挑战已完成',
        'Start?':'开始？',
        'Memory Deficiency I': '记忆匮乏 I',
        'Goal: 1.79e308 Memories':'目标：1.79e308 记忆',
        'Reward: 3x Memories':'奖励：3x 记忆',
        'Forgotten': '被遗忘的',
        'Reward: 10x Dreams':'奖励：10x 梦境',
        'World 2': '世界 2',
        'ERROR':'错误',
        'You cant turn back': '你无法回头',
        'Goal: ???':'目标：？？？',
        'Reward: ???':'奖励：？？？',

        //Void 虚空
        'Void Upgrades':'虚空升级',

        //Think 思绪
        'Think':'思绪',
        'Thinking will reset your void and void Upgrades.': '“思绪”将重置你的虚空和虚空升级。',
        'Meet the requirements': '需满足要求',

        '2x Void, Unlock Thinking Energy':'2x 虚空，解锁思绪能量',
        '5x Void, 2x Thinking Energy':'5x 虚空，2x 思绪能量',
        '-^0.14 Void divider, 3.5x Thinking Energy':'-^0.14 虚空分隔器，3.5x 思绪能量',
        'negate Void divider but disable Void upgrade #2 and 100x Think scalings.': '抵消虚空分隔器，但禁用虚空升级 #2 且思绪缩放为 x100。',
        '2x Thinking Energy and 10x Void.':'2x 思绪能量和 10x 虚空。',
        'Autobuy Void Upgrades (Just the first Upgrade).': '自动购买虚空升级（仅限第一项升级）。',
        '^1.1 Void, Unlock ???':'^1.1 虚空, 解锁 ？？？',

        'Thinking Energy':'思绪能量',

        //Nightmare 梦魇
        'Nightmare': '梦魇',
        'Resets Everything before this point.': '重置此前的所有内容。',
        'Not enough Void': '虚空不足',

        'Dreamify formula is improved ((Memories/10,000)^0.6) -> ((Memories/8,000)^0.65)': '梦境化公式已改进 ((记忆/10,000)^0.6) -> ((记忆/8,000)^0.65)',
        '5x Memories if Memories are less than 1,000': '若记忆少于 1,000，则 5x 记忆',
        '1.5x Void if Void is less than 1e10': '若虚空少于 1e10，则 x1.5 虚空',
        '3x Rest gain if Rest is less than 6': '若休息少于 6，则 x3 休息收益',
        '/1.5 Dreams if Dreams are more than 1e30': '若梦境多于 1e30，则 /1.5 梦境',
        'Improve heavily Lucid Dream formula': '大幅改进清醒梦境公式',
        'Passively generates 1% of Lucid Dreams per second but /3 Lucid Dreams': '每秒被动生成 1% 的清醒梦境，但清醒梦境 /3',

        //无需汉化
        'I': 'I', 'II': 'II', 'III': 'III', 'IV': 'IV', 'V': 'V',
        'VI': 'VI', 'VII': 'VII', 'VIII': 'VIII', 'X': 'X', 'XI': 'XI',
        'XII': 'XII', 'XIII': 'XIII', 'XIV': 'XIV', 'XV': 'XV', 'XVI': 'XVI',
        'A': 'A', 'B': 'B', 'C': 'C', 'D': 'D', 'E': 'E', 'F': 'F',
        'G': 'G', 'H': 'H', 'I': 'I', 'J': 'J', 'K': 'K', 'L': 'L',
        'M': 'M', 'N': 'N', 'O': 'O', 'P': 'P', 'Q': 'Q', 'R': 'R',
        'S': 'S', 'T': 'T', 'U': 'U', 'V': 'V', 'W': 'W', 'X': 'X',
        'Y': 'Y', 'Z': 'Z',
    "100x Memory if Memory is less than 1e20": "内存不足1e20时，内存倍率×100",
    "Goal: Complete it.": "目标：完成该条件。",
    "Memory Deficiency": "内存短缺",
    "Shards boosts themselves": "碎片增益效果自叠加",
    "Teleport": "传送",
    "Unlock a button in settings.": "在设置界面解锁一个按钮。",
    "Unlock Trials": "解锁试炼",
    "Upgrade Tree": "升级树",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "Mythic": "神话",
    "Legendary": "传说",
    "Epic": "史诗",
    "Rare": "稀有",
    "Uncommon": "罕见",
    "Common": "普通",
    "Buckler": "圆盾",
    "Amulet": "护符",
    "Wraps": "外衣",
    "Skirt": "裙子",
    "Sandals": "凉鞋",
    "Robe": "长袍",
    "Hat": "帽子",
    "Pants": "裤子",
    "Hood": "兜帽",
    "Vest": "背心",
    "Shield": "盾牌",
    "Ring": "戒指",
    "Platelegs": "板腿",
    "Platebody": "板甲",
    "Helmet": "头盔",
    "Gloves": "手套",
    "Boots": "靴子",
    // 图标代码，不能汉化
    "Jacorb's Games": "Jacorb's Games",
    "???": "???",
    "Gityx": "Gityx",
    "G8hh": "G8hh",
    "Gityx游戏": "Gityx游戏",
    "????": "????",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "$": "$",
    "#": "#",
    "/": "/",
    "]": "]",
    "[": "[",
    ">>": ">>",
    ">": ">",
    "<<": "<<",
    "<": "<",
    "%": "%",
    "+": "+",
    ".": ".",
    "…": "…",
    ":": ":",
    "-": "-",
    "|": "|",
    "(": "(",
    ")": ")",
    "Scientific": "科学计数法",
    "Standard": "标准",
    "Blind": "盲文",
    "Letters": "字母",
    "Mixed Engineering": "混合工程",
    "Mixed Scientific": "混合科学",
    "Chemistry": "化学",
    "Engineering": "工程符号",
    "By Jacorb90": "By Jacorb90",
    "content_copy": "content_copy",
    "library_books": "library_books",
    "discord": "discord",
    "drag_handle": "drag_handle",
    "edit": "edit",
    "forum": "forum",
    "content_paste": "content_paste",
    "delete": "delete",
    "info": "info",
    "settings": "settings",
    'Twitter': 'Twitter',
    "Discord": "Discord",
    "Facebook": "Facebook",
    "Instagram": "Instagram",
    "gityxcom": "gityxcom",
    "Footer": "Footer",
    "Wiki": "Wiki",
    "gityx": "gityx",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    "Loading... (If this takes too long it means there was a serious error!": "正在加载...（如果这花费的时间太长，则表示存在严重错误！",
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    'Git游戏': 'Git游戏',
    'QQ群号': 'QQ群号',
    'x': 'x',
    'QQ群号:': 'QQ群号:',
    '* 启用后台游戏': '* 启用后台游戏',
    '更多同类游戏:': '更多同类游戏:',
    'i': 'i',
    'I': 'I',
    'II': 'II',
    'III': 'III',
    'IV': 'IV',
    'V': 'V',
    'VI': 'VI',
    'VII': 'VII',
    'VIII': 'VIII',
    'X': 'X',
    'XI': 'XI',
    'XII': 'XII',
    'XIII': 'XIII',
    'XIV': 'XIV',
    'XV': 'XV',
    'XVI': 'XVI',
    'A': 'A',
    'B': 'B',
    'C': 'C',
    'D': 'D',
    'E': 'E',
    'F': 'F',
    'G': 'G',
    'H': 'H',
    'I': 'I',
    'J': 'J',
    'K': 'K',
    'L': 'L',
    'M': 'M',
    'N': 'N',
    'O': 'O',
    'P': 'P',
    'Q': 'Q',
    'R': 'R',
    'S': 'S',
    'T': 'T',
    'U': 'U',
    'V': 'V',
    'W': 'W',
    'X': 'X',
    'Y': 'Y',
    'Z': 'Z',
    'a': 'a',
    'b': 'b',
    'c': 'c',
    'd': 'd',
    'e': 'e',
    'f': 'f',
    'g': 'g',
    'h': 'h',
    'i': 'i',
    'j': 'j',
    'k': 'k',
    'l': 'l',
    'm': 'm',
    'n': 'n',
    'o': 'o',
    'p': 'p',
    'q': 'q',
    'r': 'r',
    's': 's',
    't': 't',
    'u': 'u',
    'v': 'v',
    'w': 'w',
    'x': 'x',
    'y': 'y',
    'z': 'z',
    '<': '<',
    '<<': '<<',
    '>': '>',
    '>>': '>>',
    'Jan': '1月',
    'Feb': '2月',
    'Mar': '3月',
    'Apr': '4月',
    'May': '5月',
    'Jun': '6月',
    'Jul': '7月',
    'Aug': '8月',
    'Sep': '9月',
    'Oct': '10月',
    'Nov': '11月',
    'Dec': '12月',
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}


//需处理的前缀
var cnPrefix = {
    "\n": "\n",
    "                   ": "                   ",
    "                  ": "                  ",
    "                 ": "                 ",
    "                ": "                ",
    "               ": "               ",
    "              ": "              ",
    "             ": "             ",
    "            ": "            ",
    "           ": "           ",
    "          ": "          ",
    "         ": "         ",
    "        ": "        ",
    "       ": "       ",
    "      ": "      ",
    "     ": "     ",
    "    ": "    ",
    "   ": "   ",
    "  ": "  ",
    " ": " ",
    //树游戏
    "\t\t\t": "\t\t\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "Shift-Click to Toggle Tooltips: ": "Shift-单击以切换工具提示：",
    "Notation: ": "符号: ",
    "Toggle Music: ": "切换声音: ",
    "Animations: ": "动画: ",
    "Current Endgame: ": "当前终局: ",
    "Space Background: ": "太空背景: ",
    "Memory: ": "记忆: ",
    "Shards: ": "碎片: ",
    "Auto Rest: ": "自动休息: ",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀
var cnPostfix = {
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "  ",
    " ": " ",
    "\n": "\n",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    ' I': ' I',
    ' II': ' II',
    ' III': ' III',
    ' IV': ' IV',
    ' V': ' V',
    ' VI': ' VI',
    ' VII': ' VII',
    ' VIII': ' VIII',
    ' X': ' X',
    ' XI': ' XI',
    ' XII': ' XII',
    ' XIII': ' XIII',
    ' XIV': ' XIV',
    ' XV': ' XV',
    ' XVI': ' XVI',
    "/sec)": "/秒)",
    "% bonus": "% 奖励",
    " day(s)": " 天",
    "/s]": "/秒]",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^\s*$/, //纯空格
    /^([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)h$/,
    /^([\d\.]+)m$/,
    /^([\d\.]+)m ([\d\.]+)s$/,
    /^([\d\.]+)h ([\d\.]+)m ([\d\.]+)s$/,
    /^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m ([\d\.]+)s$/,
    /^([\d\.]+)y ([\d\.]+)d ([\d\.]+)h ([\d\.]+)m ([\d\.]+)s$/,
    /^([\d\.]+)y ([\d\.]+)d ([\d\.]+)h$/,
    /^([\d\.]+)\-([\d\.]+)\-([\d\.]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)$/,
    /^×([\d\.]+)$/,
    /^x([\d\.]+)$/,
    /^v([\d\.]+)$/,
    /^\$([\d\.]+)$/,
    /^\(([\d\.]+)\)$/,
    /^([\d\.]+)\%$/,
    /^\+([\d\.]+)\%$/,
    /^([\d\.]+)\/([\d\.]+)$/,
    /^([\d\.]+)\/([\d\.,]+)$/,
    /^([\d\.,]+)\/([\d\.,]+)$/,
    /^\(([\d\.]+)\/([\d\.]+)\)$/,
    /^成本(.+)$/,
    /^\(([\d\.]+)\%\)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)\-([\d\.]+)\-([\d\.]+)$/,
    /^([\d\.]+)\/([\d\.]+)\/([\d\.]+)$/,
    /^([\d\.]+)\-([\d\.]+)\-([\d\.]+) ([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)\/([\d\.]+)\/([\d\.]+) ([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^\[([\d\.]+):([\d\.]+):([\d\.]+)\]$/,
    /^([\d\.]+)K$/,
    /^([\d\.]+)M$/,
    /^([\d\.]+)B$/,
    /^([\d\.]+) K$/,
    /^([\d\.]+) M$/,
    /^([\d\.]+) B$/,
    /^([\d\.]+) T$/,
    /^([\d\.]+) Qi$/,
    /^([\d\.]+) Qa$/,
    /^([\d\.]+) Sp$/,
    /^([\d\.]+) Oc$/,
    /^([\d\.]+) Dc$/,
    /^([\d\.]+) UDc$/,
    /^([\d\.]+) No$/,
    /^([\d\.]+) Sx$/,
    /^([\d\.]+) QaDc$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^\$([\d\.,]+)$/,
    /^\+([\d\.,]+)$/,
    /^\-([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^([\d\.]+) \[\+([\d\.]+)$/,
    /^([\d\.]+)e([\d\.,]+) \[\+([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+) \[\+([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.,]+) \[\+([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+) \[\+([\d\.]+)\/s\] \[([\d\.]+)\%\]$/,
    /^([\d\.,]+) \[\+([\d\.]+)$/,
    /^([\d\.,]+) \[\+([\d\.,]+)$/,
    /^x([\d\.,]+)$/,
    /^×([\d\.,]+)$/,
    /^([\d\.,]+) \/ ([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+) \/ ([\d\.]+)e([\d\.,]+)$/,
    /^\$([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.,]+)\/([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)\/([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e\+([\d\.,]+)$/,
    /^e([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    // /^([\uD800-\uDBFF][\uDC00-\uDFFF])|([\u2600-\u27BF])|([\u2300-\u23FF])|([\u2B50-\u2B55])|([\u203C-\u3299])|[\u21A9\u21AA\u25B6\u25C0\u2B06\u2B07\u2B05\u2B95\u2B99\u2B9A]+$/,
    // /^([\uD800-\uDBFF][\uDC00-\uDFFF])|([\u2600-\u27BF])|([\u2300-\u23FF])|([\u2B50-\u2B55])|([\u203C-\u3299])+$/,
    // /^[\uD800-\uFFFF]+$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = []

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
var cnRegReplace = new Map([
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
    [/^Jan ([\d\.,]+)$/, '1 月 $1'],
    [/^Feb ([\d\.,]+)$/, '2 月 $1'],
    [/^Mar ([\d\.,]+)$/, '3 月 $1'],
    [/^Apr ([\d\.,]+)$/, '4 月 $1'],
    [/^May ([\d\.,]+)$/, '5 月 $1'],
    [/^Jun ([\d\.,]+)$/, '6 月 $1'],
    [/^Jul ([\d\.,]+)$/, '7 月 $1'],
    [/^Aug ([\d\.,]+)$/, '8 月 $1'],
    [/^Sep ([\d\.,]+)$/, '9 月 $1'],
    [/^Oct ([\d\.,]+)$/, '10 月 $1'],
    [/^Nov ([\d\.,]+)$/, '11 月 $1'],
    [/^Dec ([\d\.,]+)$/, '12 月 $1'],
    [/^January, ([\d\.,]+)$/, '$1 年 1 月'],
    [/^February, ([\d\.,]+)$/, '$1 年 2 月'],
    [/^March, ([\d\.,]+)$/, '$1 年 3 月'],
    [/^April, ([\d\.,]+)$/, '$1 年 4 月'],
    [/^May, ([\d\.,]+)$/, '$1 年 5 月'],
    [/^June, ([\d\.,]+)$/, '$1 年 6 月'],
    [/^July, ([\d\.,]+)$/, '$1 年 7 月'],
    [/^August, ([\d\.,]+)$/, '$1 年 8 月'],
    [/^September, ([\d\.,]+)$/, '$1 年 9 月'],
    [/^October, ([\d\.,]+)$/, ' $1 年 10 月'],
    [/^November, ([\d\.,]+)$/, ' $1 年 11 月'],
    [/^December, ([\d\.,]+)$/, ' $1 年 12 月'],
    [/^Jan ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 1 月 $1, $3:$4'],
    [/^Feb ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 2 月 $1, $3:$4'],
    [/^Mar ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 3 月 $1, $3:$4'],
    [/^Apr ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 4 月 $1, $3:$4'],
    [/^May ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 5 月 $1, $3:$4'],
    [/^Jun ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 6 月 $1, $3:$4'],
    [/^Jul ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 7 月 $1, $3:$4'],
    [/^Aug ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 8 月 $1, $3:$4'],
    [/^Sep ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 9 月 $1, $3:$4'],
    [/^Oct ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 10 月 $1, $3:$4'],
    [/^Nov ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 11 月 $1, $3:$4'],
    [/^Dec ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 12 月 $1, $3:$4'],
	[/^Jan ([\d\.]+), ([\d\.]+):([\d\.]+):([\d\.]+) AM$/, '1月 $1 上午 $2:$3:$4'],
	[/^Feb ([\d\.]+), ([\d\.]+):([\d\.]+):([\d\.]+) AM$/, '2月 $1 上午 $2:$3:$4'],
	[/^Mar ([\d\.]+), ([\d\.]+):([\d\.]+):([\d\.]+) AM$/, '3月 $1 上午 $2:$3:$4'],
	[/^Apr ([\d\.]+), ([\d\.]+):([\d\.]+):([\d\.]+) AM$/, '4月 $1 上午 $2:$3:$4'],
	[/^May ([\d\.]+), ([\d\.]+):([\d\.]+):([\d\.]+) AM$/, '5月 $1 上午 $2:$3:$4'],
	[/^Jun ([\d\.]+), ([\d\.]+):([\d\.]+):([\d\.]+) AM$/, '6月 $1 上午 $2:$3:$4'],
	[/^Jul ([\d\.]+), ([\d\.]+):([\d\.]+):([\d\.]+) AM$/, '7月 $1 上午 $2:$3:$4'],
	[/^Aug ([\d\.]+), ([\d\.]+):([\d\.]+):([\d\.]+) AM$/, '8月 $1 上午 $2:$3:$4'],
	[/^Sep ([\d\.]+), ([\d\.]+):([\d\.]+):([\d\.]+) AM$/, '9月 $1 上午 $2:$3:$4'],
	[/^Oct ([\d\.]+), ([\d\.]+):([\d\.]+):([\d\.]+) AM$/, '10月 $1 上午 $2:$3:$4'],
	[/^Nov ([\d\.]+), ([\d\.]+):([\d\.]+):([\d\.]+) AM$/, '11月 $1 上午 $2:$3:$4'],
	[/^Dec ([\d\.]+), ([\d\.]+):([\d\.]+):([\d\.]+) AM$/, '12月 $1 上午 $2:$3:$4'],
	[/^Jan ([\d\.]+), ([\d\.]+):([\d\.]+):([\d\.]+) PM$/, '1月 $1 下午 $2:$3:$4'],
	[/^Feb ([\d\.]+), ([\d\.]+):([\d\.]+):([\d\.]+) PM$/, '2月 $1 下午 $2:$3:$4'],
	[/^Mar ([\d\.]+), ([\d\.]+):([\d\.]+):([\d\.]+) PM$/, '3月 $1 下午 $2:$3:$4'],
	[/^Apr ([\d\.]+), ([\d\.]+):([\d\.]+):([\d\.]+) PM$/, '4月 $1 下午 $2:$3:$4'],
	[/^May ([\d\.]+), ([\d\.]+):([\d\.]+):([\d\.]+) PM$/, '5月 $1 下午 $2:$3:$4'],
	[/^Jun ([\d\.]+), ([\d\.]+):([\d\.]+):([\d\.]+) PM$/, '6月 $1 下午 $2:$3:$4'],
	[/^Jul ([\d\.]+), ([\d\.]+):([\d\.]+):([\d\.]+) PM$/, '7月 $1 下午 $2:$3:$4'],
	[/^Aug ([\d\.]+), ([\d\.]+):([\d\.]+):([\d\.]+) PM$/, '8月 $1 下午 $2:$3:$4'],
	[/^Sep ([\d\.]+), ([\d\.]+):([\d\.]+):([\d\.]+) PM$/, '9月 $1 下午 $2:$3:$4'],
	[/^Oct ([\d\.]+), ([\d\.]+):([\d\.]+):([\d\.]+) PM$/, '10月 $1 下午 $2:$3:$4'],
	[/^Nov ([\d\.]+), ([\d\.]+):([\d\.]+):([\d\.]+) PM$/, '11月 $1 下午 $2:$3:$4'],
	[/^Dec ([\d\.]+), ([\d\.]+):([\d\.]+):([\d\.]+) PM$/, '12月 $1 下午 $2:$3:$4'],
	[/^Jan ([\d\.]+), ([\d\.]+) AM$/, '1月 $1 上午 $2'],
	[/^Feb ([\d\.]+), ([\d\.]+) AM$/, '2月 $1 上午 $2'],
	[/^Mar ([\d\.]+), ([\d\.]+) AM$/, '3月 $1 上午 $2'],
	[/^Apr ([\d\.]+), ([\d\.]+) AM$/, '4月 $1 上午 $2'],
	[/^May ([\d\.]+), ([\d\.]+) AM$/, '5月 $1 上午 $2'],
	[/^Jun ([\d\.]+), ([\d\.]+) AM$/, '6月 $1 上午 $2'],
	[/^Jul ([\d\.]+), ([\d\.]+) AM$/, '7月 $1 上午 $2'],
	[/^Aug ([\d\.]+), ([\d\.]+) AM$/, '8月 $1 上午 $2'],
	[/^Sep ([\d\.]+), ([\d\.]+) AM$/, '9月 $1 上午 $2'],
	[/^Oct ([\d\.]+), ([\d\.]+) AM$/, '10月 $1 上午 $2'],
	[/^Nov ([\d\.]+), ([\d\.]+) AM$/, '11月 $1 上午 $2'],
	[/^Dec ([\d\.]+), ([\d\.]+) AM$/, '12月 $1 上午 $2'],
	[/^Jan ([\d\.]+), ([\d\.]+) PM$/, '1月 $1 下午 $2'],
	[/^Feb ([\d\.]+), ([\d\.]+) PM$/, '2月 $1 下午 $2'],
	[/^Mar ([\d\.]+), ([\d\.]+) PM$/, '3月 $1 下午 $2'],
	[/^Apr ([\d\.]+), ([\d\.]+) PM$/, '4月 $1 下午 $2'],
	[/^May ([\d\.]+), ([\d\.]+) PM$/, '5月 $1 下午 $2'],
	[/^Jun ([\d\.]+), ([\d\.]+) PM$/, '6月 $1 下午 $2'],
	[/^Jul ([\d\.]+), ([\d\.]+) PM$/, '7月 $1 下午 $2'],
	[/^Aug ([\d\.]+), ([\d\.]+) PM$/, '8月 $1 下午 $2'],
	[/^Sep ([\d\.]+), ([\d\.]+) PM$/, '9月 $1 下午 $2'],
	[/^Oct ([\d\.]+), ([\d\.]+) PM$/, '10月 $1 下午 $2'],
	[/^Nov ([\d\.]+), ([\d\.]+) PM$/, '11月 $1 下午 $2'],
	[/^Dec ([\d\.]+), ([\d\.]+) PM$/, '12月 $1 下午 $2'],
	[/^Jan (.+), ([\d\.]+)$/, '$2 年 1 月 $1'],
	[/^Feb (.+), ([\d\.]+)$/, '$2 年 2 月 $1'],
	[/^Mar (.+), ([\d\.]+)$/, '$2 年 3 月 $1'],
	[/^Apr (.+), ([\d\.]+)$/, '$2 年 4 月 $1'],
	[/^May (.+), ([\d\.]+)$/, '$2 年 5 月 $1'],
	[/^Jun (.+), ([\d\.]+)$/, '$2 年 6 月 $1'],
	[/^Jul (.+), ([\d\.]+)$/, '$2 年 7 月 $1'],
	[/^Aug (.+), ([\d\.]+)$/, '$2 年 8 月 $1'],
	[/^Sep (.+), ([\d\.]+)$/, '$2 年 9 月 $1'],
	[/^Oct (.+), ([\d\.]+)$/, '$2 年 10 月 $1'],
	[/^Nov (.+), ([\d\.]+)$/, '$2 年 11 月 $1'],
	[/^Dec (.+), ([\d\.]+)$/, '$2 年 12 月 $1'],
	[/^January ([\d\.]+) Theme$/, '$1 年 1 月 主题'],
	[/^February ([\d\.]+) Theme$/, '$1 年 2 月 主题'],
	[/^March ([\d\.]+) Theme$/, '$1 年 3 月 主题'],
	[/^April ([\d\.]+) Theme$/, '$1 年 4 月 主题'],
	[/^May ([\d\.]+) Theme$/, '$1 年 5 月 主题'],
	[/^June ([\d\.]+) Theme$/, '$1 年 6 月 主题'],
	[/^July ([\d\.]+) Theme$/, '$1 年 7 月 主题'],
	[/^August ([\d\.]+) Theme$/, '$1 年 8 月 主题'],
	[/^September ([\d\.]+) Theme$/, '$1 年 9 月 主题'],
	[/^October ([\d\.]+) Theme$/, '$1 年 10 月 主题'],
	[/^November ([\d\.]+) Theme$/, '$1 年 11 月 主题'],
	[/^December ([\d\.]+) Theme$/, '$1 年 12 月 主题'],
	[/^Jan ([\d\.]+) \- Jan ([\d\.]+)$/, '1 月 $1 \- 1 月 $2'],
	[/^Feb ([\d\.]+) \- Feb ([\d\.]+)$/, '2 月 $1 \- 2 月 $2'],
	[/^Mar ([\d\.]+) \- Mar ([\d\.]+)$/, '3 月 $1 \- 3 月 $2'],
	[/^Apr ([\d\.]+) \- Apr ([\d\.]+)$/, '4 月 $1 \- 4 月 $2'],
	[/^May ([\d\.]+) \- May ([\d\.]+)$/, '5 月 $1 \- 5 月 $2'],
	[/^Jun ([\d\.]+) \- Jun ([\d\.]+)$/, '6 月 $1 \- 6 月 $2'],
	[/^Jul ([\d\.]+) \- Jul ([\d\.]+)$/, '7 月 $1 \- 7 月 $2'],
	[/^Jun ([\d\.]+) \- Jul ([\d\.]+)$/, '6 月 $1 \- 7 月 $2'],
	[/^Aug ([\d\.]+) \- Aug ([\d\.]+)$/, '8 月 $1 \- 8 月 $2'],
	[/^Sep ([\d\.]+) \- Sep ([\d\.]+)$/, '9 月 $1 \- 9 月 $2'],
	[/^Oct ([\d\.]+) \- Oct ([\d\.]+)$/, '10 月 $1 \- 10 $2'],
	[/^Nov ([\d\.]+) \- Nov ([\d\.]+)$/, '11 月 $1 \- 11 $2'],
	[/^Dec ([\d\.]+) \- Dec ([\d\.]+)$/, '12 月 $1 \- 12 $2'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^\^([\d\.]+) Dreams$/, '^$1 梦境'],
    [/^\^([\d\.]+) Memories$/, '^$1 记忆'],
    [/^\^([\d\.]+) Lucid Dreams$/, '^$1 清醒梦境'],
    [/^\^([\d\.]+) Lucid Energy$/, '^$1 清醒能量'],
    [/^([\d\.]+) Dreams$/, '梦境'],
    [/^([\d\.]+) Memories$/, '$1 记忆'],
    [/^([\d\.]+)x Dreams$/, '$1x 梦境'],
    [/^([\d\.]+)x Lucid Dreams$/, '$1x 清醒梦境'],
    [/^\n                        ([\d\.]+)x Lucid Dreams$/, '\n                        $1x 清醒梦境'],
    [/^([\d\.]+)x Lucid Energy$/, '$1x 清醒能量'],
    [/^\n                        ([\d\.]+)x Lucid Energy$/, '\n                        $1x 清醒能量'],
    [/^([\d\.]+) Lucid Dreams$/, '$1 清醒梦境'],
    [/^([\d\.]+) Lucid Energy$/, '$1 清醒能量'],
    [/^([\d\.]+)x Memories.$/, '$1x 记忆。'],
    [/^\/([\d\.]+) Memory and Dreams$/, '/$1 记忆和梦境'],
    [/^\/([\d\.]+) Lucid Dreams$/, '/$1 清醒梦境'],
    [/^\/([\d\.]+) Lucid Energy$/, '/$1 清醒能量'],
    [/^\/([\d\.]+) Dreams$/, '/$1 梦境'],
    [/^\/([\d\.]+) Memories$/, '/$1 记忆'],
    [/^\+([\d\.]+) elves$/, '+$1 精灵'],
    [/^\+([\d\.]+)\% elves$/, '+$1% 精灵'],
    [/^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m$/, '$1天 $2小时 $3分'],
    [/^([\d\.]+)h ([\d\.]+)m$/, '$1小时 $2分'],
    [/^([\d\.]+)m ([\d\.]+)s$/, '$1分钟 $2秒'],
    [/^([\d\.]+)e([\d\.,]+) Dreams$/, '$1e$2 梦境'],
    [/^([\d\.]+)e([\d\.,]+) Memories$/, '$1e$2 记忆'],
    [/^([\d\.]+)e([\d\.,]+) Lucid Energy$/, '$1e$2 清醒能量'],
    [/^([\d\.]+)e([\d\.,]+) Lucid Dreams$/, '$1e$2 清醒梦境'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.,]+) Shards$/, '$1 碎片'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^([\d\.,]+) Rest$/, '$1 休息'],
    [/^\/([\d\.,]+) Rest$/, '/$1 休息'],
    [/^([\d\.,]+) Rests$/, '$1 休息'],
    [/^([\d\.,]+) Dreams$/, '$1 梦境'],
    [/^([\d\.,]+) Memories$/, '$1 记忆'],
    [/^([\d\.,]+)x Memories$/, '$1x 记忆'],
    [/^\n                        ([\d\.,]+)x Memories$/, '\n                        $1x 记忆'],
    [/^([\d\.,]+)x Dreams and Memories but (.+)x Rest Scalings.$/, '$1x 梦境 和 记忆 但是 $2x 重置缩放.'],
    [/^([\d\.,]+)x Dreams (.+)$/, '$1x 梦境 $2'],
    [/^([\d\.,]+)x Memories, ([\d\.,]+)x Dreams (.+)$/, '$1x 记忆, $2x 梦境 $3'],
    [/^([\d\.,]+)x Memories and ([\d\.,]+)x Dreams$/, '$1x 记忆 和 $2x 梦境'],
    [/^([\d\.,]+)x Memories (.+)$/, '$1x 记忆 $2'],
    [/^([\d\.,]+)x Shards$/, '$1x 碎片'],
    [/^([\d\.,]+)x Lucid Dreams$/, '$1x 清醒梦境'],
    [/^([\d\.,]+)x Lucid Energy$/, '$1x 清醒能量'],
    [/^([\d\.,]+) Lucid Dreams$/, '$1 清醒梦境'],
    [/^([\d\.,]+) Lucid Energy$/, '$1 清醒能量'],
    [/^([\d\.,]+)x Shards, simple.$/, '$1x 碎片, 简单.'],
    [/^\+([\d\.,]+) elves$/, '+$1 精灵'],
    [/^\-([\d\.,]+) elves$/, '-$1 精灵'],
    [/^Level ([\d\.,]+)$/, '等级 $1'],
    [/^World ([\d\.,]+)$/, '世界 $1'],
    [/^Tripled \#([\d\.,]+)$/, '三倍 #$1'],
    [/^Doubled \#([\d\.,]+)$/, '双倍 #$1'],
    [/^Synergied \#([\d\.,]+)$/, '协同 #$1'],
    [/^Lvl ([\d\.,]+)$/, '等级 $1'],
    [/^Day ([\d\.,]+)$/, '天数 $1'],
    [/^level ([\d\.,]+) \/ ([\d\.,]+)$/, '等级 $1 \/ $2'],
    [/^level: ([\d\.,]+) \/ ([\d\.,]+)$/, '等级 $1 \/ $2'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Req: (.+) elves$/, '要求：$1 精灵'],
    [/^Req: (.+) \/ (.+) elves$/, '要求：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],
[/^\+([\d.eE+-]+[KMBT]?)% Memories \[([\d.eE+-]+[KMBT]?)\/([\d.eE+-]+[KMBT]?)\]$/, '+$1% 记忆 [$2/$3]'],
        [/^Unlock Dreams \[([\d.eE+-]+[KMBT]?)\/([\d.eE+-]+[KMBT]?)\] \[Permanent\]$/, '解锁梦境 [$1/$2] [永久]'],
        [/^\+([\d,]+(?:\.\d+)?(?:[eE][+-]?\d+)?[KMBT]?) Dreams on Reset$/, '重置时获得 +$1 梦境'],
        [/^Dream Upgrades \[([\d,]+(?:\.\d+)?(?:[eE][+-]?\d+)?[KMBT]?) Dreams\]$/, '梦境升级 [$1 梦境]'],
        [/^Unlock Rest \[([\d.eE+-]+[KMBT]?)\/([\d.eE+-]+[KMBT]?)\] \[Permanent\]$/, '解锁休息 [$1/$2] [永久]'],
        [/^\+([\d.eE+-]+[KMBT]?)% Dreams \[([\d.eE+-]+[KMBT]?)\/([\d.eE+-]+[KMBT]?)\]$/, '+$1% 梦境 [$2/$3]'],
        [/^Rest Milestones \[Rests: ([\d.eE+-]+[KMBT]?)\]$/, '休息里程碑 [休息: $1]'],
        [/^You need (.+) Dreams$/, '你需要 $1 梦境'],
        [/^\+([\d,]+(?:\.\d+)?(?:[eE][+-]?\d+)?[KMBT]?) Lucid Dreams$/, '获得 +$1 清醒梦境'],
        [/^Lucid Dream Upgrades \[([\d,]+(?:\.\d+)?(?:[eE][+-]?\d+)?[KMBT]?) Lucid Dreams\]$/, '清醒梦境升级 [$1 清醒梦境]'],
        [/^\+1 Rest bulk \[([\d.eE+-]+[KMBT]?)\/([\d.eE+-]+[KMBT]?)\]$/, '+1 批量休息 [$1/$2]'],
        [/^Unlock Lucid Energy \[([\d.eE+-]+[KMBT]?)\/([\d.eE+-]+[KMBT]?)\]$/, '解锁清醒能量 [$1/$2]'],
        [/^Lucid Energy Milestones \[([\d,]+(?:\.\d+)?(?:[eE][+-]?\d+)?[KMBT]?) Lucid Energy \[\+([\d,]+(?:\.\d+)?(?:[eE][+-]?\d+)?[KMBT]?)\/s\]\]$/, '清醒能量里程碑 [$1 清醒能量 [+$2/秒]]'],
        [/^Infinitize \[([\d,]+(?:\.\d+)?(?:[eE][+-]?\d+)?[KMBT]?) Infinities\]$/, '无限化 [$1 无限]'],
        [/^In return, \+([\d,]+(?:\.\d+)?(?:[eE][+-]?\d+)?[KMBT]?) Infinity Dreams$/, '作为回报，+$1 无限梦境'],
        [/Automatically Rest if you have the Rest requirements./,'若满足休息条件，则自动休息。'],
        [/Unlock Infinity Challenges/,'解锁无限挑战'],
        [/^Infinity Dream Upgrades \[([\d,]+(?:\.\d+)?(?:[eE][+-]?\d+)?[KMBT]?) Infinity Dreams\]$/, '无限梦境升级 [$1 无限梦境]'],
        [/^Void: ([\d,]+(?:\.\d+)?(?:[eE][+-]?\d+)?[KMBT]?) \[\+([\d,]+(?:\.\d+)?(?:[eE][+-]?\d+)?[KMBT]?)\/s\] \[\/([\d,]+(?:\.\d+)?(?:[eE][+-]?\d+)?[KMBT]?)\]$/, '虚空：$1 [+$2/秒] [/$3]'],
        [/^Thinking Milestones \[([\d,]+(?:\.\d+)?(?:[eE][+-]?\d+)?[KMBT]?) Thoughts\]$/, '思绪里程碑 [$1 思绪]'],
        [/^You need (.+) Void$/, '你需要 $1 虚空'],
        [/^Thinking Energy \[([\d,]+(?:\.\d+)?(?:[eE][+-]?\d+)?[KMBT]?) Thinking Energy \[\+([\d,]+(?:\.\d+)?(?:[eE][+-]?\d+)?[KMBT]?)\/s\]\]$/, '思绪能量 [$1 思绪能量 [+$2/秒]]'],
        [/^Nightmare Milestones \[([\d,]+(?:\.\d+)?(?:[eE][+-]?\d+)?[KMBT]?) Nightmares\]$/, '梦魇里程碑 [$1 梦魇]'],

        [/Infinity Dreams/,'无限梦境'],
        // [/Memories/,'记忆'],
        // [/Memory:/,'记忆：'],
        // [/\/s/,'/秒'],
        // [/Lucid Dreams/,'清醒梦境'],
        // [/Lucid Energy/,'清醒能量'],
        // [/Dreams/,'梦境'],
        // [/Rests/,'休息'],
        // [/Rest/,'休息'],
        [/Infinity/,'无限'],
        [/Infinities/,'无限'],
        [/Void divider/,'虚空分隔器'],
        [/Void/,'虚空'],
        [/Unlock Toughts/,'解锁思绪'],
        [/Permanent/,'永久'],
        [/Thoughts/,'思绪'],
        [/Thought/,'思绪'],
        [/Nightmares/,'梦魇'],
        [/Nightmare/,'梦魇'],

]);

var CNITEM_DEBUG = 0;

function cnItemByTag(text, itemgroup, node, textori) {
    for (let i in itemgroup) {
        if (i[0] == '.') { //匹配节点及其父节点的class
            let current_node = node;
            while (current_node) {
                if (current_node.classList && current_node.classList.contains(i.substr(1))) {
                    return itemgroup[i];
                } else if (current_node.parentElement && current_node.parentElement != document.documentElement) {
                    current_node = current_node.parentElement;
                } else {
                    break;
                }
            }
        } else if (i[0] == '#') { //匹配节点及其父节点的id
            let current_node = node;
            while (current_node) {
                if (current_node.id == i.substr(1)) {
                    return itemgroup[i];
                } else if (current_node.parentElement && current_node.parentElement != document.documentElement) {
                    current_node = current_node.parentElement;
                } else {
                    break;
                }
            }
        } else if (i[0] == '$') { //执行document.querySelector
            if (document.querySelector(i.substr(1)) != null) {
                return itemgroup[i];
            }
        } else if (i[0] == '*') { //搜索原始文本
            if (textori.includes(i.substr(1))) {
                return itemgroup[i];
            }
        }
        // and more ...
        else {
            CNITEM_DEBUG && console.log({ text, itemgroup, dsc: "不识别的标签" + i })
        }
    }
    return null;
}

//2.采集新词
//20190320@JAR  rewrite by 麦子
var cnItem = function(text, node) {

    if (typeof(text) != "string")
        return text;
    let textori = text;
    //处理前缀
    let text_prefix = "";
    for (let prefix in cnPrefix) {
        if (text.substr(0, prefix.length) === prefix) {
            text_prefix += cnPrefix[prefix];
            text = text.substr(prefix.length);
        }
    }
    //处理后缀
    let text_postfix = "";
    for (let postfix in cnPostfix) {
        if (text.substr(-postfix.length) === postfix) {
            text_postfix = cnPostfix[postfix] + text_postfix;
            text = text.substr(0, text.length - postfix.length);
        }
    }
    //处理正则后缀
    let text_reg_exclude_postfix = "";
    for (let reg of cnExcludePostfix) {
        let result = text.match(reg);
        if (result) {
            text_reg_exclude_postfix = result[0] + text_reg_exclude_postfix;
            text = text.substr(0, text.length - result[0].length);
        }
    }

    //检验字典是否可存
    if (!cnItems._OTHER_) cnItems._OTHER_ = [];

    //检查是否排除
    for (let reg of cnExcludeWhole) {
        if (reg.test(text)) {
            return text_prefix + text + text_reg_exclude_postfix + text_postfix;;
        }
    }

    //尝试正则替换
    for (let [key, value] of cnRegReplace.entries()) {
        if (key.test(text)) {
            return text_prefix + text.replace(key, value) + text_reg_exclude_postfix + text_postfix;
        }
    }

    //遍历尝试匹配
    for (let i in cnItems) {
        //字典已有词汇或译文、且译文不为空，则返回译文
        if (typeof(cnItems[i]) == "string" && (text == i || text == cnItems[i])) {
            return text_prefix + cnItems[i] + text_reg_exclude_postfix + text_postfix;
        } else if (typeof(cnItems[i]) == "object" && text == i) {
            let result = cnItemByTag(i, cnItems[i], node, textori);
            if (result != null) {
                return text_prefix + result + text_reg_exclude_postfix + text_postfix;
            } else {
                CNITEM_DEBUG && console.log({ text: i, cnitem: cnItems[i], node });
            }
        } else {
            // continue;
        }
    }

    //调整收录的词条，0=收录原文，1=收录去除前后缀的文本
    let save_cfg = 1;
    let save_text = save_cfg ? text : textori;
    //遍历生词表是否收录
    for (
        let i = 0; i < cnItems._OTHER_.length; i++
    ) {
        //已收录则直接返回
        if (save_text == cnItems._OTHER_[i])
            return text_prefix + text + text_reg_exclude_postfix + text_postfix;
    }

    if (cnItems._OTHER_.length < 1000) {
        //未收录则保存
        cnItems._OTHER_.push(save_text);
        cnItems._OTHER_.sort(
            function(a, b) {
                return a.localeCompare(b)
            }
        );
    }

    //开启生词打印
    CNITEM_DEBUG && console.log(
        '有需要汉化的英文：', text
    );

    //返回生词字串
    return text_prefix + text + text_reg_exclude_postfix + text_postfix;
};

transTaskMgr = {
    tasks: [],
    addTask: function(node, attr, text) {
        this.tasks.push({
            node,
            attr,
            text
        })
    },
    doTask: function() {
        let task = null;
        while (task = this.tasks.pop())
            task.node[task.attr] = task.text;
    },
}

function TransSubTextNode(node) {
    if (node.childNodes.length > 0) {
        for (let subnode of node.childNodes) {
            if (subnode.nodeName === "#text") {
                let text = subnode.textContent;
                let cnText = cnItem(text, subnode);
                cnText !== text && transTaskMgr.addTask(subnode, 'textContent', cnText);
                //console.log(subnode);
            } else if (subnode.nodeName !== "SCRIPT" && subnode.nodeName !== "STYLE" && subnode.nodeName !== "TEXTAREA") {
                if (!subnode.childNodes || subnode.childNodes.length == 0) {
                    let text = subnode.innerText;
                    let cnText = cnItem(text, subnode);
                    cnText !== text && transTaskMgr.addTask(subnode, 'innerText', cnText);
                    //console.log(subnode);
                } else {
                    TransSubTextNode(subnode);
                }
            } else {
                // do nothing;
            }
        }
    }
}

! function() {
    console.log("加载汉化模块");

    let observer_config = {
        attributes: false,
        characterData: true,
        childList: true,
        subtree: true
    };
    let targetNode = document.body;
    //汉化静态页面内容
    TransSubTextNode(targetNode);
    transTaskMgr.doTask();
    //监听页面变化并汉化动态内容
    let observer = new MutationObserver(function(e) {
        //window.beforeTransTime = performance.now();
        observer.disconnect();
        for (let mutation of e) {
            if (mutation.target.nodeName === "SCRIPT" || mutation.target.nodeName === "STYLE" || mutation.target.nodeName === "TEXTAREA") continue;
            if (mutation.target.nodeName === "#text") {
                mutation.target.textContent = cnItem(mutation.target.textContent, mutation.target);
            } else if (!mutation.target.childNodes || mutation.target.childNodes.length == 0) {
                mutation.target.innerText = cnItem(mutation.target.innerText, mutation.target);
            } else if (mutation.addedNodes.length > 0) {
                for (let node of mutation.addedNodes) {
                    if (node.nodeName === "#text") {
                        node.textContent = cnItem(node.textContent, node);
                        //console.log(node);
                    } else if (node.nodeName !== "SCRIPT" && node.nodeName !== "STYLE" && node.nodeName !== "TEXTAREA") {
                        if (!node.childNodes || node.childNodes.length == 0) {
                            if (node.innerText)
                                node.innerText = cnItem(node.innerText, node);
                        } else {
                            TransSubTextNode(node);
                        }
                    }
                }
            }
        }
        transTaskMgr.doTask();
        observer.observe(targetNode, observer_config);
        //window.afterTransTime = performance.now();
        //console.log("捕获到页面变化并执行汉化，耗时" + (afterTransTime - beforeTransTime) + "毫秒");
    });
    observer.observe(targetNode, observer_config);
    window.cnItems = cnItems
}();