import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../../environments/environment';
import {
  OpenRouterRequest,
  OpenRouterResponse,
  Message,
  Case,
} from '../models/game.models';

@Injectable({
  providedIn: 'root',
})
export class OpenRouterService {
  private http = inject(HttpClient);
  private apiUrl = 'https://openrouter.ai/api/v1/chat/completions';
  private apiKey = environment.openrouterApiKey;
  private model = 'openrouter/free';

sendMessage(
    messages: Message[],
    systemPrompt: string,
    userInput: string,
  ): Observable<string> {
    const userMessages = messages
      .filter(m => m.role !== 'system')
      .slice(-10)
      .map((m) => ({ role: m.role as 'user' | 'assistant', content: m.content }));

    const formattedMessages = [
      { role: 'system' as const, content: systemPrompt },
      ...userMessages,
      { role: 'user' as const, content: userInput },
    ];

    const body: OpenRouterRequest = {
      model: this.model,
      messages: formattedMessages,
      temperature: 0.7,
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.apiKey}`,
      'HTTP-Referer': window.location.origin,
      'X-Title': 'Nightmare AI',
    });

    return this.http
      .post<OpenRouterResponse>(this.apiUrl, body, { headers })
      .pipe(
        map(
          (response) =>
            response.choices[0]?.message.content ||
            'ERROR: Sin respuesta del sistema.',
        ),
      );
  }

  analyzeEvidence(
    evidenceName: string,
    systemPrompt: string,
    context: string,
  ): Observable<string> {
    const userInput = `/analizar ${evidenceName}. Contexto: ${context}`;
    const messages: Message[] = [
      { id: '1', role: 'user', content: context, timestamp: new Date() },
    ];
    return this.sendMessage(messages, systemPrompt, userInput);
  }

  interrogateSuspect(
    suspectName: string,
    systemPrompt: string,
    context: string,
  ): Observable<string> {
    const userInput = `/interrogar ${suspectName}. Contexto: ${context}`;
    const messages: Message[] = [
      { id: '1', role: 'user', content: context, timestamp: new Date() },
    ];
    return this.sendMessage(messages, systemPrompt, userInput);
  }

  accuse(
    suspectName: string,
    evidenceIds: string[],
    systemPrompt: string,
    context: string,
  ): Observable<string> {
    const userInput = `/acusar ${suspectName}. Pruebas: ${evidenceIds.join(', ')}. Contexto: ${context}`;
    const messages: Message[] = [
      { id: '1', role: 'user', content: context, timestamp: new Date() },
    ];
    return this.sendMessage(messages, systemPrompt, userInput);
  }
}
