export const typeList = {
	"essay": {
		"type": "essay",
		"title": "作文",
		"tip": "根据内容生成作文",
		"textColor": "#1FAB89",
		"bgColor": "#DFF6F0",
		"icon": "icon-gaokaozuowen",
		"title": "内容",
		"subTitle": "根据内容生成作文",
		"edit": [{
				"order": 1,
				label: '作文内容',
				key: 'content',
				default: '',
				"type": 'textarea',
				validator(val) {
					if (!val) {
						return '请输入作文内容'
					}
					return true
				},
				"placeholder": "简述你需要创作的作文内容",
				"maxlength": 500,
				autosize: {
					maxlength: 220,
					minHeight: 220
				}
			},
			{
				"order": 2,
				label: '生成字数（仅参考）',
				"placeholder": "请输入字数",
				validator(val) {
					if (!/^[1-9]\d*$/.test(val)) {
						return '请输入数字'
					}
					return true
				},
				max: 2000,
				key: 'length',
				default: 300,
				type: "number",
				width: '100%',
			}
		]
	},
	"poem": {
		"type": "poem",
		"title": "写诗",
		"tip": "根据主题生成诗文",
		"textColor": "#679BFF",
		"bgColor": "#E3F8FF",
		"icon": "icon-write",
		"subTitle": "根据主题生成诗歌",
		"edit": [{
				"order": 1,
				label: '主题',
				key: 'topic',
				default: '',
				"type": 'textarea',
				"placeholder": "简述你需要创作的诗歌主题",
				"maxlength": 500,
				validator(val) {
					if (!val) {
						return '请输入主题'
					}
					return true
				},
				autosize: {
					maxlength: 220,
					minHeight: 220
				}
			},
			{
				"order": 2,
				label: '生成字数（仅参考）',
				"placeholder": "请输入字数",
				validator(val) {
					if (!/^[1-9]\d*$/.test(val)) {
						return '请输入数字'
					}
					return true
				},
				max: 2000,
				key: 'length',
				default: 50,
				type: "number",
				width: '100%',
			},
			{
				"order": 3,
				label: '选择风格',
				type: 'select',
				key: 'poemType',
				default: "哲理诗",
				columns: ["哲理诗", "自然诗", "历史诗", "思想诗", "爱情诗", "社会诗", "讽刺诗", "社会诗", "典礼诗"],
				width: '100%',
			},
		]
	},
	"workSummary": {
		"type": "workSummary",
		"title": "工作总结",
		"tip": "根据工作内容生成总结",
		"textColor": "#A779FF",
		"bgColor": "#F5E8FF",
		"icon": "icon-gongzuozongjie",
		edit: [{
				"order": 1,
				label: '工作经历',
				key: 'experience',
				default: '',
				"type": 'textarea',
				validator(val) {
					if (!val) {
						return '请输入工作经历'
					}
					return true
				},
				"placeholder": "简述你的工作经历",
				"maxlength": 500,
				autosize: {
					maxlength: 220,
					minHeight: 220
				}
			},
			{
				"order": 2,
				label: '个人成就',
				key: 'prize',
				default: '',
				"type": 'textarea',
				validator(val) {
					if (!val) {
						return '请输入个人成就'
					}
					return true
				},
				"placeholder": "简述你的个人成就",
				"maxlength": 500,
				autosize: {
					maxlength: 220,
					minHeight: 220
				}
			},
			{
				"order": 3,
				label: '生成字数（仅参考）',
				"placeholder": "请输入字数",
				validator(val) {
					if (!/^[1-9]\d*$/.test(val)) {
						return '请输入数字'
					}
					return true
				},
				max: 2000,
				key: 'length',
				default: 300,
				type: "number",
				width: '100%',
			}
		]
	},
	"reflection": {
		"type": "reflection",
		"title": "心得体会",
		"tip": "根据内容生成作文",
		"textColor": "#FFAB4C",
		"bgColor": "#FFF4D9",
		"icon": "icon-xindetihui"
	},
	"name": {
		"type": "name",
		"title": "起名",
		"tip": "输入内容生成名字",
		"textColor": "#6C5B7B",
		"bgColor": "#F7E8FF",
		"icon": "icon-xinshengerqimingchaxun",
		edit: [{
			"order": 1,
			label: '姓氏',
			key: 'name',
			default: '',
			"type": 'field',
			validator(val) {
				if (!val) {
					return '请输入姓氏'
				}
				return true
			},
			"placeholder": "请输入您的姓氏",
		}, ]
	},
	"xiaohongshu": {
		"type": "xiaohongshu",
		"title": "小红书文案",
		"tip": "生成小红书风格的文案",
		"textColor": "#FF6F91",
		"bgColor": "#FFF0F5",
		"icon": "icon-dengpao",
		edit: [{
				"order": 1,
				label: '主题',
				key: 'topic',
				default: '',
				"type": 'field',
				validator(val) {
					if (!val) {
						return '请输入主题'
					}
					return true
				},
				"placeholder": "请输入你需要创作的主题",
			},
			{
				"order": 1,
				label: '关键词',
				key: 'keyword',
				default: '',
				"type": 'textarea',
				validator(val) {
					if (!val) {
						return '请输入小红书文案重点'
					}
					return true
				},
				"placeholder": "请输入小红书文案重点",
				"maxlength": 500,
				autosize: {
					maxlength: 220,
					minHeight: 220
				}
			},
		]
	},
	"observation": {
		"type": "observation",
		"title": "观察记录",
		"tip": "根据内容生成作文",
		"textColor": "#00FA9A",
		"bgColor": "#E0FFD0",
		"icon": "icon-guancha"
	},
	"enrichContent": {
		"type": "enrichContent",
		"title": "丰富内容",
		"tip": "根据内容生成作文",
		"textColor": "#1E90FF",
		"bgColor": "#ADD8E6",
		"icon": "icon-zuowen"
	},
	"selfCriticism": {
		"type": "selfCriticism",
		"title": "检讨书",
		"tip": "根据内容生成作文",
		"textColor": "#FF6347",
		"bgColor": "#FFF5EE",
		"icon": "icon-zuowen"
	},
	"titleDraft": {
		"type": "titleDraft",
		"title": "拟写标题",
		"tip": "根据内容生成作文",
		"textColor": "#00BFFF",
		"bgColor": "#E0FFFF",
		"icon": "icon-zuowen"
	},
	"abbreviation": {
		"type": "abbreviation",
		"title": "内容缩写",
		"tip": "根据内容生成作文",
		"textColor": "#DA70D6",
		"bgColor": "#F0E6FF",
		"icon": "icon-zuowen"
	},
	"survey": {
		"type": "survey",
		"title": "调查问卷",
		"tip": "根据内容生成作文",
		"textColor": "#3CB371",
		"bgColor": "#C1FFC1",
		"icon": "icon-zuowen"
	},
	"supportDraft": {
		"type": "supportDraft",
		"title": "支持稿",
		"tip": "根据内容生成作文",
		"textColor": "#8A2BE2",
		"bgColor": "#D8B0FF",
		"icon": "icon-zuowen"
	},
	"newsReport": {
		"type": "newsReport",
		"title": "新闻报道",
		"tip": "根据内容生成作文",
		"textColor": "#FF8C00",
		"bgColor": "#FFECB3",
		"icon": "icon-zuowen"
	},
	"friendCircle": {
		"type": "friendCircle",
		"title": "朋友圈文案",
		"tip": "根据主题重点生成朋友圈",
		"textColor": "#FF6347",
		"bgColor": "#FFEFD5",
		"icon": "icon-pengyouquan",
		edit: [{
				"order": 1,
				label: '主题',
				key: 'topic',
				default: '',
				"type": 'field',
				validator(val) {
					if (!val) {
						return '请输入主题'
					}
					return true
				},
				"placeholder": "请输入你需要创作的主题",
			},
			{
				"order": 1,
				label: '朋友圈重点',
				key: 'point',
				default: '',
				"type": 'textarea',
				validator(val) {
					if (!val) {
						return '请输入朋友圈重点'
					}
					return true
				},
				"placeholder": "简述你需要朋友圈文案重点",
				"maxlength": 500,
				autosize: {
					maxlength: 220,
					minHeight: 220
				}
			},
		]
	},
	"speech": {
		"type": "speech",
		"title": "演讲稿",
		"tip": "根据内容生成作文",
		"textColor": "#0000FF",
		"bgColor": "#D1E7FF",
		"icon": "icon-zuowen"
	},
	"notice": {
		"type": "notice",
		"title": "通知",
		"tip": "根据内容生成作文",
		"textColor": "#FF1493",
		"bgColor": "#FFE4E1",
		"icon": "icon-zuowen"
	},
	"publicAccount": {
		"type": "publicAccount",
		"title": "公众号文章",
		"tip": "输入主题生成文章",
		"textColor": "#FF6347",
		"bgColor": "#FFFACD",
		"icon": "icon-gongzhonghao1",
		edit: [{
				"order": 1,
				label: '选择风格',
				type: 'select',
				key: 'type',
				default: "品牌推广",
				columns: ["品牌推广", "企业宣传", "知识分享", "行业解读", "新闻报道", "文化艺术", "健康生活", "教育培训"],
				width: '100%',
			},
			{
				"order": 2,
				label: '内容主题',
				key: 'topic',
				default: '',
				"type": 'textarea',
				validator(val) {
					if (!val) {
						return '请输入内容主题'
					}
					return true
				},
				"placeholder": "请输入内容主题",
				"maxlength": 500,
				autosize: {
					maxlength: 220,
					minHeight: 220
				}
			},
			{
				"order": 3,
				label: '内容描述',
				key: 'desc',
				default: '',
				"type": 'textarea',
				validator(val) {
					if (!val) {
						return '请输入内容描述'
					}
					return true
				},
				"placeholder": "请输入内容描述",
				"maxlength": 500,
				autosize: {
					maxlength: 220,
					minHeight: 220
				}
			},
			{
				"order": 3,
				label: '生成字数（仅参考）',
				"placeholder": "请输入字数",
				validator(val) {
					if (!/^[1-9]\d*$/.test(val)) {
						return '请输入数字'
					}
					return true
				},
				max: 2000,
				key: 'length',
				default: 300,
				type: "number",
				width: '100%',
			}
		]
	},
	"couplet": {
		"type": "couplet",
		"title": "对联",
		"tip": "根据主题生成对联",
		"textColor": "#FF4500",
		"bgColor": "#FFEBE8",
		"icon": "icon-duilian",
		edit: [{
			"order": 1,
			label: '主题',
			key: 'topic',
			default: '',
			"type": 'textarea',
			validator(val) {
				if (!val) {
					return '请输入主题'
				}
				return true
			},
			"placeholder": "请输入主题，如：春节",
			"maxlength": 500,
			autosize: {
				maxlength: 220,
				minHeight: 220
			}
		}, ]
	}
}