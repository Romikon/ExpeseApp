import {
    CallHandler,
    ExecutionContext,
    Injectable,
    NestInterceptor,
    Logger,
  } from '@nestjs/common';
  import { Observable } from 'rxjs';
  import { tap } from 'rxjs/operators';
import config from '../config/config';
  
  @Injectable()
  export class LoggerInterceptor implements NestInterceptor {
    private readonly logger = new Logger(LoggerInterceptor.name);
  
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
      const req = context.switchToHttp().getRequest();
      const { method, url } = req;
  
      const now = Date.now();
  
      this.logger.log(`Incoming request: ${method} http://${config.dbHost}:${config.port}${url}`);
  
      return next.handle().pipe(
        tap(() => {
          const elapsedTime = Date.now() - now;
  
          this.logger.log(
            `Response for ${method} http://${config.dbHost}:${config.port}${url} completed in ${elapsedTime}ms`,
          );
        }),
      );
    }
  }
  