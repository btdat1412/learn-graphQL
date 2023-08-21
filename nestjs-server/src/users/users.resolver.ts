import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from '../users/entities/user.entity';
import { UsersService } from './users.service';

@Resolver()
export class UsersResolver {
  constructor(private userService: UsersService) {}

  @Query(() => User)
  async users(@Args('email') email: string): Promise<User> {
    return this.userService.getUserByEmail(email);
  }

  @Mutation(() => User)
  async createUser(
    @Args('displayName') displayName: string,
    @Args('password') password: string,
    @Args('email') email: string,
  ): Promise<User> {
    return this.userService.createUser(email, password, displayName);
  }

  @Mutation(() => User)
  async updateUser(
    @Args('displayName') displayName: string,
    @Args('password') password: string,
    @Args('email') email: string,
  ): Promise<User> {
    return this.userService.updateUser(email, displayName, password);
  }

  @Mutation(() => User)
  async deleteUser(@Args('email') email: string): Promise<User> {
    return this.userService.deleteUser(email);
  }
}
