
'use client';

import { useState, useEffect, useRef } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from '@/components/ui/dialog';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Loader2, Send, Sparkles, User, Bot, Trash, X } from 'lucide-react';
import { ChatMessage } from '@/lib/types';
import { getGoalCoaching } from '@/ai/flows/goal-coach-flow';
import { toast } from 'sonner';
import { v4 as uuidv4 } from 'uuid';
import { AnimatePresence, motion } from 'framer-motion';
import { ScrollArea } from './ui/scroll-area';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback } from './ui/avatar';

const STORAGE_KEY = 'quickhabits-goal-coach-chat';
const INITIAL_MESSAGE: ChatMessage = { id: uuidv4(), role: 'ai', content: "I'm Sparky, your AI Goal Coach! Tell me about an ambition you have, and I'll help you break it down into actionable steps. What's on your mind? ✨" };


type GoalCoachProps = {
    isOpen: boolean;
    onOpenChange: (isOpen: boolean) => void;
};

export default function GoalCoach({ isOpen, onOpenChange }: GoalCoachProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const storedChat = localStorage.getItem(STORAGE_KEY);
    if (storedChat) {
      setMessages(JSON.parse(storedChat));
    } else {
        // Initial AI message
        setMessages([INITIAL_MESSAGE]);
    }
  }, []);

  const saveMessages = (newMessages: ChatMessage[]) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newMessages));
    setMessages(newMessages);
  };
  
  const scrollToBottom = () => {
    if (scrollAreaRef.current) {
        scrollAreaRef.current.scrollTo({
            top: scrollAreaRef.current.scrollHeight,
            behavior: 'smooth'
        });
    }
  };

  useEffect(() => {
    // Timeout to allow the new message to render before scrolling
    setTimeout(scrollToBottom, 100);
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = { id: uuidv4(), role: 'user', content: input };
    const newMessages = [...messages, userMessage];
    saveMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      const aiResponse = await getGoalCoaching({ message: input });
      const aiMessage: ChatMessage = { id: uuidv4(), role: 'ai', content: aiResponse.response };
      saveMessages([...newMessages, aiMessage]);
    } catch (error) {
      console.error('AI Goal Coach failed:', error);
      toast.error("I'm having a little trouble thinking right now. Please try again in a moment.");
      // Rollback user message on failure
      saveMessages(newMessages.slice(0, -1));
    } finally {
      setIsLoading(false);
    }
  };
  
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const handleClearHistory = () => {
    localStorage.removeItem(STORAGE_KEY);
    setMessages([INITIAL_MESSAGE]);
    toast.success("Chat history cleared!");
    setIsAlertOpen(false);
  }

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl h-[80vh] flex flex-col p-0 gap-0">
        <DialogHeader className="p-6 pb-4 flex flex-row justify-between items-start">
            <div>
                 <DialogTitle className="font-headline text-lg flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-primary"/>
                    AI Goal Coach
                </DialogTitle>
                <DialogDescription>Your personal AI companion for planning and achieving your ambitions.</DialogDescription>
            </div>
             <AlertDialog open={isAlertOpen} onOpenChange={setIsAlertOpen}>
                <AlertDialogTrigger asChild>
                    <Button variant="ghost" size="icon" disabled={messages.length <= 1}>
                        <Trash className="w-4 h-4" />
                        <span className="sr-only">Clear History</span>
                    </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete your entire conversation history with the Goal Coach.
                    </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction
                        onClick={handleClearHistory}
                        className="bg-destructive hover:bg-destructive/90"
                    >
                        Clear History
                    </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </DialogHeader>

        <ScrollArea className="flex-grow px-6" viewportRef={scrollAreaRef}>
            <div className="space-y-6 pb-4">
            <AnimatePresence>
                {messages.map((message) => (
                <motion.div
                    key={message.id}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className={cn(
                    'flex items-start gap-3',
                    message.role === 'user' ? 'justify-end' : 'justify-start'
                    )}
                >
                    {message.role === 'ai' && (
                        <Avatar className='w-8 h-8 bg-primary text-primary-foreground'>
                            <AvatarFallback><Bot className='w-5 h-5'/></AvatarFallback>
                        </Avatar>
                    )}
                    <div
                    className={cn(
                        'rounded-lg px-4 py-2 max-w-[80%] whitespace-pre-wrap',
                        message.role === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted'
                    )}
                    >
                    {message.content}
                    </div>
                     {message.role === 'user' && (
                        <Avatar className='w-8 h-8'>
                            <AvatarFallback><User className='w-5 h-5'/></AvatarFallback>
                        </Avatar>
                    )}
                </motion.div>
                ))}
            </AnimatePresence>
             {isLoading && (
                 <motion.div
                    key="loading"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className='flex items-start gap-3 justify-start'
                  >
                     <Avatar className='w-8 h-8 bg-primary text-primary-foreground'>
                        <AvatarFallback><Bot className='w-5 h-5'/></AvatarFallback>
                    </Avatar>
                    <div className='rounded-lg px-4 py-3 bg-muted'>
                        <Loader2 className="w-5 h-5 animate-spin"/>
                    </div>
                </motion.div>
            )}
          </div>
        </ScrollArea>
        <div className="p-6 pt-4 border-t bg-background">
            <form onSubmit={handleSendMessage} className="flex items-center gap-2">
            <Input
                placeholder="Tell me about your goal..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={isLoading}
            />
            <Button type="submit" size="icon" disabled={isLoading || !input.trim()}>
                {isLoading ? <Loader2 className="animate-spin" /> : <Send />}
            </Button>
            </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
