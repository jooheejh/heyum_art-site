
import React, { useState } from 'react';
import { SiteConfig, Post } from '../types';
import { Settings, FileText, Layout as LayoutIcon, LogOut, Plus, Trash2, Save } from 'lucide-react';

interface AdminDashboardProps {
  config: SiteConfig;
  setConfig: (config: SiteConfig) => void;
  posts: Post[];
  setPosts: (posts: Post[]) => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ config, setConfig, posts, setPosts }) => {
  const [activeTab, setActiveTab] = useState<'posts' | 'settings'>('settings');
  const [editingConfig, setEditingConfig] = useState<SiteConfig>(config);
  const [newPost, setNewPost] = useState<Partial<Post>>({
    title: '',
    category: '칼럼',
    excerpt: '',
    imageUrl: 'https://picsum.photos/seed/new/800/600'
  });

  const handleSaveConfig = () => {
    setConfig(editingConfig);
    alert('설정이 저장되었습니다.');
  };

  const handleAddPost = () => {
    if (!newPost.title) return;
    const post: Post = {
      id: Date.now().toString(),
      title: newPost.title || '',
      category: newPost.category || '칼럼',
      excerpt: newPost.excerpt || '',
      content: '내용 준비 중...',
      date: new Date().toISOString().split('T')[0],
      imageUrl: newPost.imageUrl || ''
    };
    setPosts([post, ...posts]);
    setNewPost({ title: '', category: '칼럼', excerpt: '', imageUrl: 'https://picsum.photos/seed/new/800/600' });
  };

  const handleDeletePost = (id: string) => {
    if (confirm('정말 삭제하시겠습니까?')) {
      setPosts(posts.filter(p => p.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-brand-charcoal text-white p-6 flex flex-col">
        <div className="mb-12">
          <h2 className="text-xl font-bold font-serif mb-2">Admin Panel</h2>
          <p className="text-xs text-gray-400">혜윰예술심리연구소 관리</p>
        </div>
        
        <nav className="flex-grow space-y-2">
          <button 
            onClick={() => setActiveTab('settings')}
            className={`w-full flex items-center px-4 py-3 rounded-lg transition-colors ${activeTab === 'settings' ? 'bg-brand-wood text-white' : 'text-gray-400 hover:bg-white/5'}`}
          >
            <Settings size={18} className="mr-3" />
            사이트 설정
          </button>
          <button 
            onClick={() => setActiveTab('posts')}
            className={`w-full flex items-center px-4 py-3 rounded-lg transition-colors ${activeTab === 'posts' ? 'bg-brand-wood text-white' : 'text-gray-400 hover:bg-white/5'}`}
          >
            <FileText size={18} className="mr-3" />
            게시물 관리
          </button>
        </nav>

        <button className="flex items-center text-sm text-gray-400 hover:text-white mt-auto pt-8 border-t border-white/10">
          <LogOut size={16} className="mr-2" />
          로그아웃
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-grow p-10 overflow-y-auto max-h-screen">
        <header className="flex justify-between items-center mb-10">
          <h1 className="text-2xl font-bold text-brand-charcoal">
            {activeTab === 'settings' ? '사이트 기본 설정' : '게시물 관리 (CRUD)'}
          </h1>
          <div className="flex items-center space-x-2 bg-brand-ivory px-4 py-2 rounded-full border border-brand-wood/20">
             <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
             <span className="text-xs font-medium text-brand-charcoal">관리자 모드 활성화됨</span>
          </div>
        </header>

        {activeTab === 'settings' ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm space-y-6">
              <h3 className="font-bold flex items-center border-b pb-4 mb-4">
                <LayoutIcon size={18} className="mr-2" /> 브랜드 및 테마
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-500 mb-1">연구소 이름</label>
                  <input 
                    type="text" 
                    value={editingConfig.name}
                    onChange={(e) => setEditingConfig({...editingConfig, name: e.target.value})}
                    className="w-full px-4 py-2 border rounded-md focus:ring-1 ring-brand-wood outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 mb-1">슬로건</label>
                  <input 
                    type="text" 
                    value={editingConfig.slogan}
                    onChange={(e) => setEditingConfig({...editingConfig, slogan: e.target.value})}
                    className="w-full px-4 py-2 border rounded-md focus:ring-1 ring-brand-wood outline-none"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 mb-1">포인트 컬러</label>
                    <div className="flex items-center space-x-2">
                      <input 
                        type="color" 
                        value={editingConfig.theme.pointColor}
                        onChange={(e) => setEditingConfig({...editingConfig, theme: {...editingConfig.theme, pointColor: e.target.value}})}
                        className="h-10 w-10 p-0 border-none rounded cursor-pointer"
                      />
                      <span className="text-xs font-mono">{editingConfig.theme.pointColor}</span>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 mb-1">메인 폰트</label>
                    <select 
                      value={editingConfig.theme.fontFamily}
                      onChange={(e) => setEditingConfig({...editingConfig, theme: {...editingConfig.theme, fontFamily: e.target.value as 'serif' | 'sans'}})}
                      className="w-full px-4 py-2 border rounded-md outline-none"
                    >
                      <option value="serif">세리프 (고전적/우아함)</option>
                      <option value="sans">산세리프 (현대적/깔끔함)</option>
                    </select>
                  </div>
                </div>
              </div>
              <button 
                onClick={handleSaveConfig}
                className="w-full py-3 bg-brand-charcoal text-white rounded-lg font-bold flex items-center justify-center hover:bg-black transition-colors mt-8"
              >
                <Save size={18} className="mr-2" /> 변경사항 저장하기
              </button>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="font-bold flex items-center border-b pb-4 mb-4">
                실시간 미리보기
              </h3>
              <div className="p-6 rounded-lg border border-dashed border-gray-300 bg-gray-50">
                <div 
                  className="p-8 bg-white shadow-lg rounded-sm"
                  style={{ fontFamily: editingConfig.theme.fontFamily === 'serif' ? 'Noto Serif KR' : 'Pretendard' }}
                >
                  <span style={{ color: editingConfig.theme.pointColor }} className="text-[10px] font-bold uppercase tracking-widest mb-1 block">Preview Mode</span>
                  <h4 className="text-xl font-bold mb-2">{editingConfig.name}</h4>
                  <p className="text-sm text-gray-500 mb-6">{editingConfig.slogan}</p>
                  <button 
                    className="px-6 py-2 text-xs font-bold text-white rounded-full"
                    style={{ backgroundColor: editingConfig.theme.pointColor }}
                  >
                    Button Sample
                  </button>
                </div>
              </div>
              <p className="text-[10px] text-gray-400 mt-4 text-center italic">이곳의 설정이 저장되면 사이트 전체에 실시간 반영됩니다.</p>
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Add New Post */}
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="font-bold flex items-center border-b pb-4 mb-6">새 게시물 작성</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-gray-500 mb-1">제목</label>
                  <input 
                    type="text" 
                    value={newPost.title}
                    onChange={(e) => setNewPost({...newPost, title: e.target.value})}
                    placeholder="게시물 제목을 입력하세요"
                    className="w-full px-4 py-2 border rounded-md outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 mb-1">카테고리</label>
                  <select 
                    value={newPost.category}
                    onChange={(e) => setNewPost({...newPost, category: e.target.value})}
                    className="w-full px-4 py-2 border rounded-md outline-none"
                  >
                    <option value="칼럼">칼럼</option>
                    <option value="공지사항">공지사항</option>
                    <option value="활동소식">활동소식</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-xs font-bold text-gray-500 mb-1">요약문</label>
                  <textarea 
                    value={newPost.excerpt}
                    onChange={(e) => setNewPost({...newPost, excerpt: e.target.value})}
                    placeholder="리스트에 보여질 짧은 설명"
                    className="w-full px-4 py-2 border rounded-md outline-none"
                    rows={2}
                  />
                </div>
                <button 
                  onClick={handleAddPost}
                  className="md:col-span-2 py-3 bg-brand-wood text-white rounded-lg font-bold flex items-center justify-center hover:bg-opacity-90 transition-colors"
                >
                  <Plus size={18} className="mr-2" /> 게시물 게시하기
                </button>
              </div>
            </div>

            {/* Posts List */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <table className="w-full text-left">
                <thead className="bg-gray-50 text-xs font-bold text-gray-500 uppercase">
                  <tr>
                    <th className="px-6 py-4">게시물</th>
                    <th className="px-6 py-4">카테고리</th>
                    <th className="px-6 py-4">날짜</th>
                    <th className="px-6 py-4 text-right">관리</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {posts.map(post => (
                    <tr key={post.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <img src={post.imageUrl} className="w-10 h-10 object-cover rounded mr-4" />
                          <span className="font-medium text-brand-charcoal">{post.title}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-2 py-1 bg-gray-100 text-[10px] font-bold rounded">
                          {post.category}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-xs text-gray-500">{post.date}</td>
                      <td className="px-6 py-4 text-right">
                        <button 
                          onClick={() => handleDeletePost(post.id)}
                          className="text-red-400 hover:text-red-600 transition-colors"
                        >
                          <Trash2 size={18} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
